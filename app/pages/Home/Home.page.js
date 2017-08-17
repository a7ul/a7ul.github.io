import React, {Component} from 'react';
import HomeView from '../../components/Home/Home.component';
import rssParser from 'rss-parser-browser';
import {connect} from 'react-redux';
import {updateRSSFeed} from '../../state/actions/index.actions';
import result from 'lodash/result';
import PropTypes from 'prop-types';
import {routerActions} from '../../routes/router';

class HomePage extends Component {
  static propTypes = {
    updateRSS: PropTypes.func,
    rss: PropTypes.object,
    isMobileView: PropTypes.bool,
    goToExperiments: PropTypes.func,
    goToHome: PropTypes.func
  }
  componentDidMount () {
    const {updateRSS} = this.props;
    rssParser.parseURL('http://www.atulr.com/blog-atul/feed.xml', function (err, parsed) {
      if (!err) {
        updateRSS(parsed);
      } else {
        console.log('rss feed error', err);
      }
    });
  }
  render () {
    const {rss, isMobileView, goToHome, goToExperiments} = this.props;
    return (
      <HomeView rss={rss} goToHome={goToHome} goToExperiments={goToExperiments} isMobileView={isMobileView}/>
    );
  }
}

const mapStateToProps = (state) => ({
  rss: result(state, 'rss', {}),
  isMobileView: result(state, 'isMobileView', false)
});

const mapDispatchToProps = (dispatch) => ({
  updateRSS: (rssParsed) => dispatch(updateRSSFeed(rssParsed)),
  goToExperiments: () => dispatch(routerActions.push('experiments')),
  goToHome: () => dispatch(routerActions.push('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

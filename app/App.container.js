import Router from './routes/router';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import contributions from './assets/json/contributions.json';
import projects from './assets/json/projects.json';
import {mobileMQ} from './utils/mediaQuery.util';
import PropTypes from 'prop-types';
import {setMobileView} from './state/actions/index.actions';

console.log('to test,contributions, projects', contributions, projects);

class AppContainer extends Component {
  static propTypes = {
    setWebsiteAsMobileView: PropTypes.func
  }
  componentWillMount () {
    const {setWebsiteAsMobileView} = this.props;
    setWebsiteAsMobileView(mobileMQ.matches);
    mobileMQ.addListener(() => {
      setWebsiteAsMobileView(mobileMQ.matches);
    });
  }
  componentWillUnmount () {
    mobileMQ.removeListener();
  }
  render () {
    return (
      <Router />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setWebsiteAsMobileView: (isMobileView) => dispatch(setMobileView(isMobileView))
});

export default connect(null, mapDispatchToProps)(AppContainer);

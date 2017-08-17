import Router from './routes/router';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import {mobileMQ} from './utils/mediaQuery.util';
import PropTypes from 'prop-types';
import {setMobileView} from './state/actions/index.actions';

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

import React, {Component} from 'react';
import ProjectsView from '../../components/Projects/Projects.component';
import {connect} from 'react-redux';
import result from 'lodash/result';
import PropTypes from 'prop-types';
import {getExperiments} from '../../utils/transformer.util';
import projectsList from '../../assets/json/projects.json';
import {routerActions} from '../../routes/router';

class LibrariesPage extends Component {
  static propTypes = {
    isMobileView: PropTypes.bool,
    goToHome: PropTypes.func
  }

  render () {
    const {isMobileView, goToHome} = this.props;
    const title = 'Open Source Libraries';
    const projects = getExperiments(projectsList);
    const description = 'By a developer .. for developers';
    const iconName = 'code';
    return (
      <ProjectsView projects={projects} iconName={iconName} title={title} description={description} isMobileView={isMobileView} goToHome={goToHome}/>
    );
  }
}

const mapStateToProps = (state) => ({
  isMobileView: result(state, 'isMobileView', false)
});

const mapDispatchToProps = (dispatch) => ({
  goToHome: () => dispatch(routerActions.push('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(LibrariesPage);

import React, {Component} from 'react';
import styles from './ProjectsBoard.component.style';
import ProjectCategory from './ProjectCategory.component';
import theme from '../../../style/theme';
import PropTypes from 'prop-types';

class ProjectsBoard extends Component {
  static propTypes = {
    goToExperiments: PropTypes.func,
    goToLibraries: PropTypes.func,
    isMobileView: PropTypes.bool
  }

  render () {
    const {goToExperiments, goToLibraries, isMobileView} = this.props;
    const body = isMobileView ? styles.aboutBody : {...styles.aboutBody, padding: '0 25px'};
    return (
      <div style={styles.container}>
        <div style={styles.about}>
          <div style={styles.aboutTitle}>ABOUT ME</div>
          <div style={body}>
            <div style={styles.aboutPara}>
              Atul is a polyglot full stack developer. He has experience with end to end development and deployment of web and mobile applications. He is a maker at heart and loves to play and hack around with technology.
            </div>
            <div style={styles.aboutPara}>
               He also has experience with VR, Image processing, Robotics, Game development and Desktop apps.
               He loves to teach and strongly believes that you can learn something from everyone you meet.
            </div>
          </div>
        </div>
        <div style={styles.row}>
          <ProjectCategory onPress={goToExperiments}  iconName='flask' title='PROJECTS & EXPERIMENTS' count={20} iconColor={theme.tileRed}/>
          <ProjectCategory  onPress={goToLibraries}  iconName='code' title='OPEN SOURCED LIBRARIES' count={14} iconColor={theme.tileGreen}/>
        </div>
      </div>
    );
  }
}

export default ProjectsBoard;

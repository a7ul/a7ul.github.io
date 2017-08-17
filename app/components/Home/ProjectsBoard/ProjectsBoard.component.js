import React, {Component} from 'react';
import styles from './ProjectsBoard.component.style';
import ProjectCategory from './ProjectCategory.component';
import theme from '../../../style/theme';
import PropTypes from 'prop-types';

class ProjectsBoard extends Component {
  static propTypes = {
    goToExperiments: PropTypes.func
  }

  render () {
    const {goToExperiments} = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.row}>
          <ProjectCategory onPress={goToExperiments} style={styles.topLeft} iconName='flask' title='PROJECTS & EXPERIMENTS' count={20} iconColor={theme.tileRed}/>
          <ProjectCategory style={styles.topRight} iconName='code' title='OPEN SOURCED LIBRARIES' count={14} iconColor={theme.tileGreen}/>
        </div>
        <div style={styles.row}>
          <ProjectCategory style={styles.bottomLeft} iconName='code-fork' count={7} title='OPEN SOURCE CONTRIBUTIONS' iconColor={theme.tileBlue}/>
          <ProjectCategory style={styles.bottomRight} iconName='black-tie' count={0} title='CV/RESUME'  iconColor={theme.tileYellow}/>
        </div>
      </div>
    );
  }
}

export default ProjectsBoard;

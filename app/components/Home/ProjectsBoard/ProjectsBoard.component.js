import React, {Component} from 'react';
import styles from './ProjectsBoard.component.style';
import ProjectCategory from './ProjectCategory.component';
import theme from '../../../style/theme';

class ProjectsBoard extends Component {
  static propTypes = {

  }

  render () {
    return (
      <div style={styles.container}>
        <div style={styles.row}>
          <ProjectCategory style={styles.topLeft} iconName='flask' title='PROJECTS & EXPERIMENTS' count={20} iconColor={theme.tileRed}/>
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

// <ProjectTile name='ImShow-Java-OpenCV' imgUrl={null} topics={['yo', 'java', 'opencv']} url='http://google.com' forkCount={3} starCount={4} description='an alternative to imshow() in C++ OpenCV for Java OpenCV' />

export default ProjectsBoard;

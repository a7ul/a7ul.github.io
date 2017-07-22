import React, {Component} from 'react';
import styles from './TileBoard.component.style';
import Tile from './Tile.component';
import theme from '../../../style/theme';

class TileBoard extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div style={{...styles.row, ...styles.firstRow}}>
          <Tile bgColor={theme.tileBlue} iconAlign={'right'} count={23} goTo={null} icon='flask' title='EXPERIMENTS / PROJECTS' />
          <Tile bgColor={theme.tileGreen} iconAlign={'right'} count={12} goTo={null} icon='code' title='OPEN SOURCED LIBRARIES' />
        </div>
        <div style={{...styles.row, ...styles.secondRow}}>
          <Tile bgColor={theme.tileYellow} iconAlign={'right'} count={49} goTo={null} icon='code-fork' title='OPEN SOURCE CONTRIBUTIONS' />
          <Tile bgColor={theme.tileRed}  iconAlign={'center'} count={0} goTo={null} icon='black-tie' title='CV / RESUME' />
        </div>
      </div>
    );
  }
}

export default TileBoard;

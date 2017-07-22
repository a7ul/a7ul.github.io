import React, {Component} from 'react';
import styles from './TileBoard.component.style';
import Tile from './Tile.component';

class TileBoard extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div style={styles.row}>
          <Tile goTo={null} icon='twitter' title='Sample 1' subtitle='Yo this is sample1'/>
          <Tile goTo={null} icon='facebook' title='Sample 1' subtitle='Yo this is sample1'/>
        </div>
        <div style={styles.row}>
          <Tile goTo={null} icon='twitter' title='Sample 1' subtitle='Yo this is sample1'/>
          <Tile goTo={null} icon='facebook' title='Sample 1' subtitle='Yo this is sample1'/>
        </div>
      </div>
    );
  }
}

export default TileBoard;

import React, {Component} from 'react';
import HomeView from '../../components/Home/Home.component';

class HomePage extends Component {
  render () {
    const mobileMQ = window.matchMedia('(max-width: 800px)');
    return (
      <HomeView mobile={mobileMQ.matches}/>
    );
  }
}

export default HomePage;

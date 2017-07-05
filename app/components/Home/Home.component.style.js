import bg from '../../assets/bgg.jpg';
import logo from '../../assets/logo.png';
export default {
  container: {
    background: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    overflow: 'auto'
  },
  header: {
    padding: '15px 15px 0 15px'
  },
  logo: {
    background: `url(${logo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: 40,
    width: 40
  },
  dashboardContainer: {
    display: 'flex'
  },
  dashboard: {
    display: 'flex',
    flex: 1
  }
};

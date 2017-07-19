import logo from '../../assets/logo.png';
export default {
  container: {
    backgroundColor: '#59A9C2',
    height: '100vh',
    width: '100vw',
    overflow: 'auto'
  },
  header: {
    padding: '7px 15px',
  },
  logo: {
    background: `url(${logo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: 30,
    width: 30
  },
  dashboardContainer: {
    display: 'flex',
    paddingBottom: 10
  },
  dashboard: {
    display: 'flex',
    flex: 1
  }
};

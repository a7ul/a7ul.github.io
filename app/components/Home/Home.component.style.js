import logo from '../../assets/logo.png';
import theme from '../../style/theme';

export default {
  container: {
    backgroundColor: theme.backgroundWhite,
    height: '100vh',
    overflow: 'auto',
    display: 'flex',
    padding: 10,
    flexDirection: 'row'
  },
  logo: {
    background: `url(${logo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: 30,
    width: 30
  },
  dashboardSection: {
    display: 'flex',
    flex: 4,
    flexDirection: 'column',
    animationName: 'fadeIn',
    animationDuration: '2s'
  },
  infoSection: {
    borderLeft: '1px solid rgb(203, 203, 204)',
    display: 'flex',
    flex: 5,
    flexDirection: 'column'
  }
};

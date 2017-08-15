import logo from '../../assets/logo.png';
import theme from '../../style/theme';

export default {
  container: {
    backgroundColor: theme.backgroundWhite,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 10,
    flexFlow: 'row nowrap',
    height: '100vh'
  },
  container_M: {
    flexFlow: 'column nowrap',
    minHeight: '100vh',
    height: null
  },
  logo: {
    background: `url(${logo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: 30,
    width: 30
  },
  dashboardSection: {
    animationName: 'fadeIn',
    animationDuration: '2s',
    display: 'flex',
    flex: 4,
    flexDirection: 'column'
  },
  infoSection: {
    display: 'flex',
    flex: 5,
    overflow: 'auto',
    flexDirection: 'column',
    borderLeft: '1px solid rgb(203, 203, 204)'
  },
  infoSection_M: {
    borderTop: '1px solid rgb(203, 203, 204)',
    paddingTop: 10,
    borderLeft: null
  }
};

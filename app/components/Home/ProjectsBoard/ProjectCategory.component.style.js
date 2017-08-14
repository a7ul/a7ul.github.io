import {injectStyle} from '../../../style/utility';
import theme from '../../../style/theme';

const keyframesStyle = `
  @-webkit-keyframes pulse {
    0% {transform: translateY(-100%);}
    50%{transform: translateY(8%);}
    65%{transform: translateY(-4%);}
    80%{transform: translateY(4%);}
    95%{transform: translateY(-2%);}
    100% {transform: translateY(0%);}
  }
`;

injectStyle(keyframesStyle);

export default {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    animationName: 'pulse',
    animationDuration: '1s'
  },
  icon: {
    size: 40
  },
  title: {
    fontSize: '0.8em',
    paddingTop: 5,
    paddingBottom: 5,
    maxWidth: 150,
    textAlign: 'center',
    fontWeight: 700
  },
  count: {
    color: 'white',
    padding: 4,
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: 30,
    fontSize: '0.8em',
    fontWeight: 800,
    backgroundColor: theme.notificationColor
  }
};

import theme from '../../../style/theme';

export default {
  container: {
    display: 'flex',
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    animationName: 'slideInFromTop',
    animationDuration: '1s',
    cursor: 'pointer'
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

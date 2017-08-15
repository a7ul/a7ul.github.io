import theme from '../../../style/theme';

export default {
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  wrapper: {
    paddingBottom: 60
  },
  dashboard: {
    flex: 1,
    padding: '0 10px',
    textAlign: 'center'
  },
  title: {
    fontSize: '2em',
    fontWeight: 200,
    padding: 10,
    color: theme.tileGreen
  },
  name: {
    fontWeight: 600,
    color: 'black'
  },
  subtitle: {
    padding: '5px 20px 20px 20px',
    fontWeight: 600,
    fontSize: '1em'
  },
  dot: {
    color: theme.tileRed
  },
  dp: {
    width: 130,
    borderRadius: 80,
    boxShadow: 'lightgrey -1px 4px 3px'
  }
};

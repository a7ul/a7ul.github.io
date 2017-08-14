import theme from '../../../style/theme';

export default {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 0',
    borderTop: '1px solid rgb(203, 203, 204)',
    justifyContent: 'center'
  },
  blogTitle: {
    fontWeight: 800,
    color: 'black',
    display: 'flex',
    fontSize: '1em',
    paddingLeft: 20
  },
  blogLink: {
    display: 'inline-block',
    padding: '10px 15px',
    marginTop: 10,
    fontSize: '0.8em',
    fontWeight: 800,
    border: '1px solid black'
  },
  rssWrapper: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column'
  },
  nextTick: {
    paddingLeft: 10,
    color: theme.tileGreen
  }
};

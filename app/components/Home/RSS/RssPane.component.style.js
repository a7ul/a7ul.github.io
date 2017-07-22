import theme from '../../../style/theme';

export default {
  container: {
    flex: 1
  },
  blogTitle: {
    fontWeight: 600,
    padding: '10px 0',
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    background: theme.tileGreen
  },
  blogLink: {
    display: 'inline-block',
    padding: '10px 15px',
    marginTop: 10,
    fontSize: 14,
    fontWeight: 800,
    border: '1px solid black'
  },
  rssWrapper: {
    boxShadow: 'lightGrey 0 0 10px',
    backgroundColor: 'white',
    padding: '0 15px 15px 15px'
  },
  nextTick: {
    paddingLeft: 10,
    color: theme.tileGreen
  }
};

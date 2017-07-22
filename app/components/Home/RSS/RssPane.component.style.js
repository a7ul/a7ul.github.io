import theme from '../../../style/theme';

export default {
  container: {
    flex: 1,
    padding: '0 15px 10px 15px'
  },
  blogTitle: {
    fontWeight: 400,
    padding: '0 10px 10px 10px',
    textAlign: 'center'
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
    padding: 15
  },
  nextTick: {
    paddingLeft: 10,
    color: theme.tileGreen
  }
};

import theme from '../../../style/theme';

export default {
  container: {
    padding: '8px 0'
  },
  title: {
    fontWeight: 400,
    color: theme.linkedInBlue,
    display: 'inline'
  },
  bullet: {
    display: 'inline',
    paddingRight: 5,
  },
  date: {
    padding: '2px 0',
    display: 'inline-block',
    fontSize: '0.8em',
    color: theme.tileGreen
  },
  content: {
    paddingTop: 10,
    textAlign: 'justify',
    overflow: 'hidden',
    fontSize: '1em'
  },
  categories: {
    display: 'inline-block'
  },
  categoryItem: {
    display: 'inline-block',
    marginLeft: 10,
    padding: 5,
    color: 'black',
    fontSize: '0.8em',
    fontWeight: 700
  }
};

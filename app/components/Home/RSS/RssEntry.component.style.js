import theme from '../../../style/theme';

export default {
  container: {
    padding: '10px 0'
  },
  title: {
    fontWeight: 400,
    color: theme.linkedInBlue,

  },
  date: {
    padding: '2px 0',
    display: 'inline-block',
    fontSize: 12,
    color: theme.tileGreen
  },
  content: {
    paddingTop: 10,
    textAlign: 'justify',
    overflow: 'hidden'
  },
  categories: {
    display: 'inline-block'
  },
  categoryItem: {
    display: 'inline-block',
    marginLeft: 10,
    padding: 5,
    color: 'black',
    fontSize: 12,
    borderRadius: 10,
    border: '1px solid'
  }
};

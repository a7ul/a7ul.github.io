import theme from '../../../style/theme';

export default {
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  wrapper: {

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
  },
  selfUpdating: {
    textAlign: 'center',
    padding: 20,
    color: theme.linkedInBlue,
    fontSize: '0.8em'
  },
  selfbloglink: {
    fontSize: '0.9em',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: theme.tileGreen
  }
};

import theme from '../../style/theme';

export default {
  mobileContainer: {
    padding: 10,
    width: '100%',
  },
  webContainer: {
    padding: 10,
    width: 400,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 150,
    borderRadius: 5,
    background: 'white',
    boxShadow: '0px 1px 2px 0 rgba(0,0,0,0.2)',
    overflow: 'hidden'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    padding: '10px 10px 0 10px'
  },
  name: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: '0.9em'
  },
  description: {
    fontWeight: 400,
    textTransform: 'capitalize',
    fontSize: '0.9em'
  },
  topics: {
    display: 'inline-block'
  },
  topicItem: {
    display: 'inline-block',
    padding: 2,
    color: 'black',
    fontSize: '0.8em',
    fontWeight: 700
  },
  bottomBar: {
    display: 'flex',
    fontSize: '0.7em',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
    background: 'rgba(0,0,0,0.6)',
    color: 'white'
  },
  starIcon: {
    fill: theme.tileYellow,
    size: 12
  },
  forkIcon: {
    fill: theme.tileBlue,
    size: 12
  },
  linkIcon: {
    fill: theme.tileRed,
    size: 12
  },
  iconGroup: {
    display: 'flex',
    flexDirection: 'row'
  },
  bottomBarElement: {
    display: 'flex',
    padding: 5
  },
  demoLink: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.8em',
    fontWeight: 400,
    color: 'white',
    textAlign: 'center',
    background: theme.tileRed,
    alignSelf: 'flex-end',
    padding: 5,
    borderRadius: '5px 5px 0 0'
  }
};

import theme from '../../../style/theme';

export default {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    border: `3px solid ${theme.backgroundWhite}`,
    maxHeight: 140,
    minHeight: 130,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },
  link: {
    background: 'rgba(255, 255, 255, 0.29)',
    borderRadius: 20,
    flex: 1,
    overflow: 'no-scroll'
  },
  text: {
    display: 'flex',
    fontSize: 13,
    fontWeight: 600,
    color: 'white',
    alignSelf: 'center'
  },
  icon: {
    flex: 1,
    display: 'flex'
  },
  contentStyle: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  tileWrapper: {
    padding: '20px 5px',
    textAlign: 'center'
  },
  iconCount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10
  },
  count: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    fontSize: 40,
    fontWeight: 100,
    color: 'white'
  }
};

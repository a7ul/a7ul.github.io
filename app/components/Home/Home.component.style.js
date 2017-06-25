import bg from '../../assets/bgg.jpg';
import dp from '../../assets/dp1-min.png';
export default {
  container: {
    backgroundColor: 'aliceblue'
  },
  dashboard: {
    height: '100vh',
    display: 'flex',
    background: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  profileContainer: {
    flex: 2,
    flexDirection: 'column'
  },
  profileWrapper: {
    flexDirection: 'column',
    display: 'flex',
    height: '100%',
    flex: 1
  },
  dp: {
    flex: 3,
    background: `url(${dp})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom'
  },
  portfolio: {
    flex: 2,
    padding: 10
  },
  myName: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 100,
    paddingTop: 20
  },
  mySkills: {
    fontSize: 20,
    padding: 20,
    fontWeight: 300,
    textAlign: 'center'
  },
  links: {
    flex: 1
  },
  linkRow: {
    flex: 1,
    flexDirection: 'row'
  },
  link: {
    flex: 1
  },
  rssPane: {
    flex: 1,
  }
};

import React from 'react';
import styles from './Logo.component.style';
import PropTypes from 'prop-types';

const Logo = ({onPress, ...extraprops}) => (
  <div style={styles.logo} onClick={onPress} {...extraprops}/>
);

Logo.propTypes = {
  onPress: PropTypes.func
};

export default Logo;

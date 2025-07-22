import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../utils/theme-provider';

const Button = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <button 
      style={{
        ...theme?.button
      }}
      {...props}
    >
      {children || 'Button'}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node
};

export default Button;

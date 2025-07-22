import React, {createContext, useContext} from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext(null);

export const ThemeProvider = ({tokens, children}) => {

  return (
    <ThemeContext.Provider value={tokens}>
      {children}
    </ThemeContext.Provider>
  );
};

// PropTypes for better type checking
ThemeProvider.propTypes = {
  tokens: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if(!context) {
    throw new Error('useTheme must be used within a Themeprovider')
  }

  return context;
}

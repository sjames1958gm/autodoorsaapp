import React from 'react';
import { View } from 'react-native';

const Card = props => {
  const s = props.styles
    ? { ...styles.containerStyle, ...props.styles }
    : styles.containerStyle;
  return <View style={s}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 10,
    marginTop: 10,
    width: '45%'
  }
};

export { Card };

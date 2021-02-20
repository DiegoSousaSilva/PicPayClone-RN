import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableWithoutFeedback} from 'react-native';
import { Button, Label } from './styles';

const PayButton = ({onPress, focused}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={
          focused
          ? ['#fff', '#ccc']
          :['#00fc6c', '#00ac4a']

        }
        start={{x:1, y:0.2}}
      >
        <Icon 
          name='attach-money' 
          size={30} 
          color={focused ? '#000': '#fff'} />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  )
}

export default PayButton;
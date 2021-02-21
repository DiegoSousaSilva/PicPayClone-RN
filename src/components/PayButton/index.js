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
          ? ['#005600', '#004500']
          :['#007800', '#00ac4a']

        }
        start={{x:1, y:0.2}}
      >
        <Icon 
          name='attach-money' 
          size={25} 
          color={focused ? 'rgba(255,255,255,0.7)' : '#fff'} />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  )
}

export default PayButton;
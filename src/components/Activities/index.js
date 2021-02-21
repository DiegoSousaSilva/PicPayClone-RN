import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';

import avatar from '../../images/avatar.png';

import { 
  Container, 
  Header, 
  Title, 
  Card, 
  CardHeader, 
  Avatar, 
  Description, 
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

const Activities = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar}/>
          <Description>
            <Bold>Você </Bold>pagou a <Bold>@DanielaRodrigues</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Diego Sousa</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 250,00</Value>
            <Divider/>
            
            <Ionicons name='lock-closed-outline' size={25} color='#fff' /> 
            <Date>Há 2 horas</Date>
          </Details>

          <Actions>
            <Option>
            <Ionicons name='ios-chatbox-outline' size={25} color='#fff' /> 
            <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
            <Ionicons name='heart-outline' size={25} color='#fff' /> 
            <OptionLabel>0</OptionLabel>
            </Option>  
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activities;

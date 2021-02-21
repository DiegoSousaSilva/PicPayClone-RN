import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import Icon2 from 'react-native-vector-icons/MaterialIcons';

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
            
            <Icon name='lock' size={25} color='#fff' /> 
            <Date>Há 2 horas</Date>
          </Details>

          <Actions>
            <Option>
            <Icon2 name='message' size={25} color='#fff' /> 
            <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
            <Icon name='heart' size={25} color='#fff' /> 
            <OptionLabel>0</OptionLabel>
            </Option>  
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activities;

import React from 'react';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Activities from '../../components/Activities';
import Suggestions from '../../components/Suggestions';

import { Wrapper, Header, BalanceContainer, BalanceTitle, Balance, Container} from './styles';

const Home= () => {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000'/>
      <Wrapper>
        <Container>
          <Header>
            <Icon name='qrcode' size={30} color='#10c86e'/>

            <BalanceContainer>
              <BalanceTitle>Meu saldo</BalanceTitle>
              <Balance>R$ 0,00</Balance>
            </BalanceContainer>

            <Icon name='gift' size={30} color='#10c86e'/>
          </Header>

          <Suggestions />
          <Activities />
        </Container>
      </Wrapper>
    </>
  );
};

export default Home;

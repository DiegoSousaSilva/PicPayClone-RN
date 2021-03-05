import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Header, HeaderContainer, Title, BalanceContainer, Value, Bold, EyeButton, Info, Actions, Action, ActionLabel } from './styles';

const Wallet = () => {
  return (
    <Container>
      <Header colors={['#52e78c','#1ab563']}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>0,00</Bold>
            </Value>
            <EyeButton>
              <Icon name="eye-outline" size={33} color="#fff"/>
            </EyeButton>
          </BalanceContainer>
          <Info>
            Seu saldo está rendendo 100% no CDI
          </Info>

          <Actions>
            <Action>
              <Icon name="cash-outline" size={28} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <Icon name="business" size={28} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>  
    </Container>
  );
};

export default Wallet;

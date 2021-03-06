import React, {useState} from 'react';
import {Switch} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import CreditCard from '../../images/credit-card.png';

import { 
  Container, 
  Header, 
  HeaderContainer, 
  Title, 
  BalanceContainer, 
  Value, 
  Bold, 
  EyeButton, 
  Info, 
  Actions, 
  Action, 
  ActionLabel, 
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

const Wallet = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  const setVisible = ()=>{
    setIsVisible((prevState)=>!prevState);
  } 

  const handleTogleUsebalance = ()=>{
    setUseBalance((prevState)=>!prevState);
  } 

  return (
    <Container>
      <Header 
      colors={
        useBalance
        ? ['#52e78c','#1ab563']
        : ['#d3d3d3','#868686']
      }>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? '0,00': '----'}</Bold>
            </Value>
            <EyeButton onPress={setVisible}>
              <Icon name={isVisible ? "eye-outline": "ios-eye-off-outline"} size={33} color="#fff"/>
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

      <UseBalance>
        <UseBalanceTitle>
          Usar saldo ao pagar
        </UseBalanceTitle>

        <Switch 
          value= {useBalance}
          onValueChange={handleTogleUsebalance}
        />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>
          Formas de pagamento
        </PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>
                Cadastre seu cartão de crédito
              </CardTitle>
              <CardInfo>
                Cadastre um cartão de crédito para fazer pagamentos mesmo quando não tiver saldo no PicPay
              </CardInfo>
            </CardDetails>

            <Img source={CreditCard} />
          </CardBody>

          <AddButton>
            <Icon name='add-circle-outline' size={35} color='#0db060'/>
            <AddLabel>
              Adicionar cartão de crédito
            </AddLabel>
          </AddButton>
        </Card>

        <UseTicketButton>
        <Icon name='qr-code-sharp' size={20} color= '#0db060'/>
        <UseTicketLabel>
          Usar código promocional
        </UseTicketLabel>
      </UseTicketButton>
      </PaymentMethods>
      

    </Container>
  );
};

export default Wallet;

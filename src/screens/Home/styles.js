import styled from 'styled-components';

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container  = styled.ScrollView`
  
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BalanceContainer  = styled.View`
  
`;

export const BalanceTitle  = styled.Text`
  color: rgba(255, 255, 255, 0.8);  
  font-size: 12px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

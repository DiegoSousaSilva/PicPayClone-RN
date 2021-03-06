import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;


export const BalanceContainer = styled.View`
  margin: 8px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #fff;
  font-size: 38px;
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled.Text`
  color: #fff;
  font-size: 14px;
`;


export const  Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const  Action = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  width: 140px;
  height: 45px;
  margin:0 10px;
  padding: 5px;
  border: 2px solid rgba(255,255,255,.6);
  border-radius: 25px;
`;

export const  ActionLabel = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const UseBalance = styled.View`
  background: #1c1c1e;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  text-align: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  align-self: center;
`;


export const  PaymentMethods = styled.ScrollView`
  margin-top: 15px;
  padding: 0 16px;
`;

export const  PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;

export const  Card = styled.View`
  margin-top: 10px;
  background: #1e232a;
  border-radius: 8px;
  padding: 15px;

`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
 flex: 1;
 margin-right: 20px;
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const CardInfo = styled.Text`
  margin-top: 15px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
`;

export const Img = styled.Image.attrs(()=>({
  resizeMode: 'contain',
}))`
  width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
 flex-direction: row;
 align-items: center;
 justify-content: center;
 margin-top: 10px;
`;

export const AddLabel = styled.Text`
  margin-left: 10px;
  color: #0db060;
  font-size: 16px;
`;

export const UseTicketButton = styled.TouchableOpacity`
  margin-top: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const UseTicketLabel = styled.Text `
  color: #0db060;
  font-size: 14px;
  margin-left: 16px;
  text-decoration: underline;
`;
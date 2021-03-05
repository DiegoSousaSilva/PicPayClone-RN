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

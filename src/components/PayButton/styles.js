import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Button = styled(LinearGradient)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 11px;
  color:${({focused})=>focused ? 'rgba(255,255,255,0.7)' : '#fff'};
  font-weight: bold;
`;

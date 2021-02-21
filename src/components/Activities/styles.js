import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const Header = styled.View`
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

 
export const Card  = styled.View`
  background: #1e222b;
  border-radius: 8px;
  margin-top: 16px;
  padding: 15px;
`;

export const CardHeader  = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar  = styled.Image`
`;

export const Description  = styled.Text`
  color: rgba(255,255,255, 0.9);
  margin-left: 16px;
  font-size: 14px;
`;

export const Bold = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin-top: 16px;
`;

export const UserName = styled.Text`
  color: rgba(255,255,255, 0.9);
  font-size: 16px;
`;

export const CardFooter = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View`
  width:2px;
  height: 12px;
  background: rgba(255,255,255, 0.5);
  margin: 0 10px;
`;

export const Value = styled.Text`
  color: #f75175;
  font-size: 11px;
  font-weight: bold;
`;

export const Date = styled.Text`
  margin-left: 5px;
  color: #fff;
  font-size: 11px;
`;

export const Option = styled.TouchableOpacity`
  margin-left: 15px;
  flex-direction: row;
`;

export const Actions = styled.View`
  flex-direction: row;
`;
export const OptionLabel = styled.Text`
  font-size: 12px;
  margin-left: 6px;
  color: #fff;
`;
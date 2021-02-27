import styled from 'styled-components/native';

export const Container = styled.View`
  background: #6882bb;
  margin: 20px 16px;
  border-radius: 8px;
  height: 150px;
  flex-direction: row;
  padding: 15px;
  align-items: center;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Img = styled.Image``;

export const Description = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-top: 15px;
`;
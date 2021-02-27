import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(()=>({
  horizontal: true,
  contentContainerStyle: { alignItens: 'center', paddingLeft: 16, }
}))`
  margin-top: 25px;
`;

 
export const Option = styled.TouchableOpacity`
  background: ${({bgColor}) => bgColor};
  width: 150px;
  height: 200px;
  padding: 15px;
  border-radius: 8px;
  justify-content: space-between;
  margin-right: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Img = styled.Image`
  align-self: center;
`;

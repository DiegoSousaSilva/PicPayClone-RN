import React from 'react';

import img13 from '../../images/13.png';
import { Container, Details, Title, Img, Description } from './styles';

const Banner = () => {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>Mantenha suas parcerias em dia, use o PicPay para fazer uma cobrança</Description>
      </Details>

      <Img source={img13}/>
    </Container>
  );
};

export default Banner;

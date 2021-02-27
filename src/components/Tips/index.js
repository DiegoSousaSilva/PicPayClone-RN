import React from 'react';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const items = [
  {
    key: String(Math.random()),
    title: "Pague suas contas sem sair de casa",
    img: img8,
    bgColor: "#72c",
  },
  {
    key: String(Math.random()),
    title: "Compre o que quiser sem sair de casa",
    img: img9,
    bgColor: "#6a0159",
  },
  {
    key: String(Math.random()),
    title: "Pague um amigo à distância",
    img: img10,
    bgColor: "#4139c8",
  },
  {
    key: String(Math.random()),
    title: "Saiba como pagar um boleto",
    img: img11,
    bgColor: "#00ab4b",
  },
  {
    key: String(Math.random()),
    title: "Adicione dinheiro no PicPay",
    img: img12,
    bgColor: "#badf76",
  },
];

import { Container, Option, Title, Img } from './styles';

const Tips = () => {
  return (
    <Container>
      {items.map((item) =>{
        return(
          <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>

          <Img source={item.img}/>
        </Option>
        );
      })}
    </Container>
  );
};

export default Tips;

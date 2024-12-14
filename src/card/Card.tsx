import React from 'react';
import styled from 'styled-components';
import { Image } from '../components/ImageCard.styled';
import { Title } from '../components/TitleCard.styled';
import { Text } from '../components/TextCard.styled';
import { Button } from '../components/ButtonCard.styled';

type CardPropsType = {
   src?: string;
   title?: string;
   text?: string;
   textColor?: string;
   textColor2?: string;
   bgColor?: string;
   hoverText?: string;
   hover?: string;
   border?: string;
};

export const Card = (props: CardPropsType) => {
   return (
      <StyledCard>
         <Image src={props.src} />
         <Title> {props.title}</Title>
         <Text>{props.text}</Text>
         <BtnBox>
            <Button
               $textColor={props.textColor}
               $bgColor={props.bgColor}
               $hoverText={props.hoverText}
               $border={props.border}>
               See more
            </Button>
            <Button $hover={props.hover} $textColor={props.textColor2} $border={props.border}>
               Save
            </Button>
         </BtnBox>
      </StyledCard>
   );
};

const StyledCard = styled.div`
   padding: 10px 10px 10px 10px;
   background-color: #fff;
   max-width: 280px;
   box-shadow: 0px 4px 20px 5px #0000001a;
   border-radius: 15px;
`;

const BtnBox = styled.div`
   padding: 19px 0 10px 10px;
   display: flex;
   gap: 12px;
`;

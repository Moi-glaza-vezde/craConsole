import React from 'react';
import styled from 'styled-components';
import imgCard from '../assets/image/imgCard.jpg';
import { StyledCardWrapper } from '../components/StyledCardWrapper.styled';
import { ImageCard } from '../components/ImageCard.styled';
import { TitleCard } from '../components/TitleCard.styled';
import { TextCard } from '../components/TextCard.styled';
import { ButtonCard } from '../components/ButtonCard.styled';
export const Card = () => {
   return (
      <div>
         <StyledCardWrapper>
            <StyledCard>
               <ImageCard src={imgCard} alt="foto" />
               <TitleCard>Headline</TitleCard>
               <TextCard>
                  Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                  venen.
               </TextCard>
               <BtnBox>
                  <ButtonCard $textColor={'#fff'} $bgColor={'#4E71FE'} $hoverText={'#4E71FE'}>
                     See more
                  </ButtonCard>
                  <ButtonCard $hover={'#4E71FE'} $textColor={'#4E71FE'}>
                     Save
                  </ButtonCard>
               </BtnBox>
            </StyledCard>
         </StyledCardWrapper>
      </div>
   );
};

const StyledCard = styled.div`
   padding: 10px 10px 10px 10px;
   background-color: #fff;
   max-width: 280px;
   //height: 350px;
   box-shadow: 0px 4px 20px 5px #0000001a;
   border-radius: 15px;
`;

const BtnBox = styled.div`
   padding: 19px 0 10px 10px;
   display: flex;
   gap: 12px;
`;

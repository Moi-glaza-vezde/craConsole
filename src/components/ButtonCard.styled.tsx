import React from 'react';
import styled from 'styled-components';

type ButtonCardPropsType = {
   $bgColor?: string;
   $textColor?: string;
   $hover?: string;
   $hoverText?: string;
   $border?: string;
};
export const Button = styled.button<ButtonCardPropsType>`
   width: 86px;
   height: 30px;
   background-color: ${(props) => props.$bgColor || '#ffff'};
   color: ${(props) => props.$textColor || '#000000'};
   transition-duration: 0.2s;

   &:hover {
      background-color: ${(props) => props.$hover || '#ffff'};
      color: ${(props) => props.$hoverText || '#fff'};
   }
   border: 2px solid ${(props) => props.$border || '#4e71fe'};
   border-radius: 5px;

   font-size: 10px;
   font-weight: 700;
   line-height: 20px;
`;

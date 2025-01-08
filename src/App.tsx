import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './card/Card';
import { StyledCardWrapper } from './components/StyledCardWrapper.styled';
import { items } from './card/Data';

function App() {
   return (
      <StyledCardWrapper>
         {items.map((item, index) => {
            return (
               <Card
                  key={index}
                  src={item.img}
                  title={item.title}
                  border={item.border}
                  text={item.text}
                  textColor={item.textColor}
                  textColor2={item.textColor2}
                  bgColor={item.bgColor}
                  hoverText={item.hoverText}
                  hover={item.hover}
               />
            );
         })}
      </StyledCardWrapper>
   );
}

export default App;

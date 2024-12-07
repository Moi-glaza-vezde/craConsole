import React from 'react';

import { createGlobalStyle } from 'styled-components';
export const GlobalSlyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');


   * {
      padding: 0;
      margin: 0;
      border: 0;
   }
   *,
   *:betore,
   *:after {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;

      box-sizing: border-box;
   }
   :focus,
   :active {
      outline: none;
   }
   a:focus,
   a:active {
      outline: none;
   }
   nav,
   footer,
   header,
   aside {
      display: block;
   }

   html,
   body {
      height: 100%;
      widows: 100%;
      font-size: 100%;
      line-height: 1;
      font-size: 14px;
      -ms-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -webkit-trxt-size-adjust: 100%;
   }

   input,
   button,
   textarea {
      display: yes;
   }

   input::-ms-clear {
      display: none;
   }
   button {
      cursor: pointer;
   }
   button::-moz-focus-inner {
      padding: 0;
      border: 0;
   }
   a,
   a:visited {
      text-decoration: none;
   }
   a:hover {
      text-decoration: none;
   }
   ul li {
      list-style: none;
   }
   li {
      list-style: none;
   }
   img {
      vertical-align: top;
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      font-size: inherit;
      font-weight: 400;
   }

   body {
    //  background-color: #000000;

	 font-family: "Inter", sans-serif;

   }
`;

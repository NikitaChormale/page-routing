import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import Home from "./Home";
import About from './About';
import Contact from './Contact';

const root= createRoot(document.getElementById('root'));
const path=window.location.pathname;
console.log("current path:",path);
if(path ==="/"){
    root.render(<About/>);
}
else if (path==="/Home"){
   root.render(<Home/>);
} 
else if (path==="/contact"){
  root.render(<Contact/>);
}

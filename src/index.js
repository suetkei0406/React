import React from 'react';           //imr
import ReactDOM from 'react-dom';    //imrd
import RootComponent from './rootcomponent/root';         //no need to type this line, it will be automatically added when u write ReactDom on line 6, if not will error


ReactDOM.render(<RootComponent></RootComponent>,document.getElementById('root'));
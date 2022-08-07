import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BillList from './components/BillList';


var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
      <BillList></BillList>
    </div>,

    destination

);

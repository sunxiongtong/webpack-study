var Header = require('./header.js');
var SideBar = require('./sidebar.js');
var Content = require('./content.js');
import lz from './home.png';
import './index.scss';

var img = new Image();
img.src = lz;
img.classList.add('aimg');
document.body.appendChild(img);

console.log('img12#123');
img.onclick=function(){
    var div = document.createElement('div');
    div.innerHTML = 'item';
    div.className = 'item';

    document.body.appendChild(div);
}

new Header();
new SideBar();
new Content();

const arr = [
    new Promise(()=>{}),
    new Promise(()=>{})
]

arr.map((item)=>{
    console.log(item)
})

import React,{Component} from 'react';
import ReactDom from 'react-dom';
import data from './sxt'
console.log(data)
class App extends Component {
    render(){
        return <div>{data}</div>
    }
}

ReactDom.render(<App />,document.getElementById('dom'));
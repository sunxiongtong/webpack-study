// var Header = require('./header.js');
// var SideBar = require('./sidebar.js');
// var Content = require('./content.js');
// import lz from './home.png';
// import './index.scss';

// var img = new Image();
// img.src = lz;
// img.classList.add('aimg');
// document.body.appendChild(img);

// console.log('img12#123');
// img.onclick=function(){
//     var div = document.createElement('div');
//     div.innerHTML = 'item';
//     div.className = 'item';

//     document.body.appendChild(div);
// }

// new Header();
// new SideBar();
// new Content();

// const arr = [
//     new Promise(()=>{}),
//     new Promise(()=>{})
// ]

const arr = [1,2,3,4];
arr.map((item)=>{
    console.log(item)
})
console.log(2+101)
import React,{Component} from 'react';
// import ReactDom from 'react-dom';
// import data from './sxt'
// console.log(data)
class App extends Component {
    render(){

        return <div>{123}</div>
    }
}

// ReactDom.render(<App />,document.getElementById('dom'));
// import _ from 'lodash';

function getElement(){
    return import('lodash').then(({default:_})=>{
        var el = document.createElement('div');
        div.innerHTML = _.join(['s','x','t'],'*')
    })
}

function getElement1(){
    return import('react-dom').then(({default:r})=>{
        r.render(<App/>,document.getElementById('dom'))
    })
}

getElement().then(el=>{
    document.body.appendChild(el);
})

getElement1().then(el=>{
    document.body.appendChild(el);
})
var Header = require('./header.js');
var SideBar = require('./sidebar.js');
var Content = require('./content.js');
import lz from './home.png';
import './index.scss';

var img = new Image();
img.src = lz;
img.classList.add('aimg');
document.body.appendChild(img);

new Header();
new SideBar();
new Content();
module.exports = function Header(){
    let dom = document.getElementById("dom");
    let div = document.createElement('div');
    div.innerText = '我是header';
    dom.appendChild(div);
    console.log('hahah1')
}
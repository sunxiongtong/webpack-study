module.exports = function Content(){
    let dom = document.getElementById("dom");
    let div = document.createElement('div');
    div.innerText = '我是content';
    dom.appendChild(div);
}
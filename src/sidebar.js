module.exports = function SideBar(){
    let dom = document.getElementById("dom");
    let div = document.createElement('div');
    div.innerText = '我是sidebar';
    dom.appendChild(div);
}
let clickers = 50;
let startTime = Date.now();

// position
function sync(dom, pos) {
  dom.style.left = `${pos.x}px`;
  dom.style.top = `${pos.y}px`;
}
//`${pos.x}px`

function addClicker() {
    const pos = {
        x: Math.random() * 500,
        y: Math.random() * 300,
    };
    const img = new Image();
    img.src = "res/images/cat.png";
    img.style.position = "absolute";
    img.addEventListener("click", removeClicker, false);

    document.querySelector('#board').appendChild(img);
    sync(img, pos);
}

function removeClicker(e){
    e.target.parentElement.removeChild(e.target);
}

let i = 0;

while(i < 10){
    addClicker();
    i++;
}
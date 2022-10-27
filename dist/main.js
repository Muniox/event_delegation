const list = document.querySelector('.alert-list');
const button = document.querySelector('.add-button');
//event propagation
button.addEventListener('click', (e) => {
    const newLi = document.createElement("li");
    newLi.innerText = 'some text';
    newLi.setAttribute('class', 'alert-item');
    list.append(newLi);
});
list.addEventListener('click', (e) => {
    const target = e.target;
    if (target.className === 'alert-item') {
        target.remove();
    }
});
//bubbling
// https://www.youtube.com/watch?v=9Bmk2mm-lWw&t=16s&ab_channel=Jakzacz%C4%85%C4%87programowa%C4%87%3F
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');
box1.addEventListener('click', (ev) => {
    box1.style.backgroundColor = 'red';
});
box2.addEventListener('click', (ev) => {
    box2.style.backgroundColor = 'green';
});
box3.addEventListener('click', (ev) => {
    // const target = ev.target as HTMLDivElement;
    box3.style.backgroundColor = 'yellow';
});
//# sourceMappingURL=main.js.map
const content = document.querySelector('.content')
let player = 'X';
let markur = ''

for (let i = 1; i <= 9; i+=1) {
    markur += `<div class="item"></div>`
}

content.insertAdjacentHTML('beforeend', markur)
content.addEventListener('click', onclick)

function onclick(evn) {
    if (!evn.target.textContent) {
        evn.target.textContent = player;
        player = player === 'X' ? 'O' : 'X'
    }
}
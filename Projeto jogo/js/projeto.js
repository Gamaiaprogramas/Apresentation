const marião=document.querySelector('.marião');
const pipe=document.querySelector('.pipe');

const jump = () =>{
    marião.classList.add('jump');

    setTimeout(() => {
        marião.classList.remove('jump');
    },500);
}



document.addEventListener('keydown', jump);
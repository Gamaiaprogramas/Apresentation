const url = 'https://www.ifood.com.br/delivery/sao-paulo-sp/tk-burguer-e-porcoes-cidade-lider/34e6cbf6-fe09-415f-b5ce-a7dc8e8b380b'
const btn1 = document.querySelector('#btn1')

function openinNewTab(url){
    const win = window.open(url,    '_blank')
    win.focus()
}

btn1.addEventListener('click', () => {
    openinNewTab(url)
})

const butão = document.querySelector('#submitbnt')
const nomezin = document.querySelector('#nomezin').value
const sugestion = document.querySelector('#sugestion').value

console.log("Nome: " +nomezin)
console.log("Sugestão: "+sugestion)


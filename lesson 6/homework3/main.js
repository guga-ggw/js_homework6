const input = document.getElementById('txtbox')
const btn = document.getElementById("average")

const elements = []
input.addEventListener('input', ()=>{
    input.classList.add("hovered")
})
let showAlertOnce = true

const alertAndRefresh = () => {
    if (showAlertOnce) {
        window.alert('Use ":" to divide numbers or write only numbers')
        showAlertOnce = false
        refresh()
    }
}

const refresh = () => {
    window.location.reload()
}
btn.addEventListener('click', ()=>{
    const txt = input.value
    const gayofa = txt.split(":")
    elements.push(...gayofa)
    const tonum = elements.map((item) =>{
        return item = Number(item)
    })

    const filtred = tonum.filter((number) =>{
        if(isNaN(number)){
            alertAndRefresh()
        }
        else{
            return number
        }

    })
    console.log(filtred)
    let namravli = 0
    

    for(let i = 0; i < filtred.length; i++){
        namravli = namravli + filtred[i]
        
    }
    console.log(filtred.length)
    let shedegi = namravli / filtred.length 
    const restartbtn = document.createElement('button')
    restartbtn.innerText = "restart"
    document.querySelector('.shedegi').append(restartbtn)
    restartbtn.addEventListener('click', ()=>{
        window.location.reload()
    })
    const shedegi2 = shedegi.toFixed(1)
    const toweb = document.querySelector('h2')
    toweb.innerHTML = shedegi2
    input.value = ""
})



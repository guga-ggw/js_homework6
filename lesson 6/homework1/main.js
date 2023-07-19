const btn = document.querySelector(`#btn`)
const back = document.querySelector(".intruction_before")

btn.addEventListener('click', ()=>{
    back.classList.add('blured')
    document.body.querySelector(".main").classList.add("blured")
    const modal =  document.createElement("div")
    modal.setAttribute('id', 'modal')
    const layer = document.querySelector('.layer')
    layer.style.display = "block"
    document.body.append(modal)
    const h1 = document.createElement('h1')
    h1.innerText = "This is Modal"
    modal.append(h1)
    const removebtn = document.createElement('button')
    removebtn.innerText = 'Remove'
    modal.append(removebtn)
    removebtn.addEventListener('click', ()=>{
        modal.remove()
        document.body.querySelector(".main").classList.remove("blured")
        layer.style.display = "none"

    })

    
    
})
 
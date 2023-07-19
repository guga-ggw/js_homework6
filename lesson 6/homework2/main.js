const input = document.getElementById('input')
const btn = document.getElementById('btn')

btn.addEventListener('click', (e)=>{
    
    e.preventDefault()
    const color = input.value 
    if(color === 'red' || color === 'green' || color === 'black' || color === 'white' || color === 'blue'){
        document.body.style.background = color
    }
    else{
        window.alert('choose only colors that are in the list')
    }

    input.value = ""
})
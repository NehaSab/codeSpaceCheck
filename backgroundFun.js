let color = function(){

const hexa = '0123456789ABCDEF'
let colorCode = '#'

for (let i = 0; i < 6 ; i++){
colorCode += hexa[Math.floor(Math.random()*16)]
// console.log(colorCode,' colorcode')

}
return colorCode

}


let intervalId=null
const changeBackground = function(){

    if(!intervalId){
        intervalId = setInterval(function(){
        document.body.style.backgroundColor= color(); 
    }, 1000)
   
}
}

const stopChanging = function(){
    clearInterval(intervalId)
    intervalId=null

}



document.querySelector("#start").addEventListener('click', changeBackground)

document.querySelector("#stop").addEventListener('click', stopChanging)
const sentence = document.getElementById("str")
const button = document.getElementById("btn")
const output = document.getElementById("output")
const reset = document.querySelector(".reset")
console.log(sentence,button)

button.addEventListener("click",()=>{
    if(sentence.value!=""){
        var txt = String(sentence.value)
    console.log(txt.length,sentence.value)
    output.textContent=txt.length
    }
    else{
        alert("invalid value")
    }
    
})

reset.addEventListener("click",()=>{
    sentence.value=""
    output.textContent=""

})
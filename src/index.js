import { MiniMaple } from "./miniMaple";
document.addEventListener('DOMContentLoaded',setup)

const miniMaple = new MiniMaple()

function setup() {
    document.getElementById('diffButton').onclick = diff;
}

function diff(){
    const polynomInputStr = document.getElementById('polynomInputField').value
    const resultStr = miniMaple.symbolic_diff(polynomInputStr, "x")
    if (resultStr === null) {
        alert("Error! Cannot parse polynom")
    }
    const resultLabel = document.getElementById('resultLabel')
    resultLabel.innerText = resultStr
}
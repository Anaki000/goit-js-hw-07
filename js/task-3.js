const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", output)

function output(event) {
    const trimInput = event.target.value.trim();
    
 if (trimInput !== "") {
     textOutput.textContent = trimInput
     return
 } else {
     textOutput.textContent = "Anonymous"
    }
    
}
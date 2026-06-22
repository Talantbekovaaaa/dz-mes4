const input = document.getElementById('text-input');
const totalDisplay = document.getElementById('total');
const remainingDisplay = document.getElementById('remaining');
const LIMIT = 50;

input.addEventListener('input', () => {
    let text = input.value;
    
    
    if (text.length > LIMIT) {
        input.value = text.slice(0, LIMIT);
    }
    
    const length = input.value.length;
 
    totalDisplay.innerText = length;
    remainingDisplay.innerText = LIMIT - length;
  
    if (length === LIMIT) {
        totalDisplay.parentElement.style.backgroundColor = "#d9534f";
    } else {
        totalDisplay.parentElement.style.backgroundColor = "transparent";
    }
});
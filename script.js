
function increase(id) {
    const inputField = document.getElementById(id);
    let currentValue = parseInt(inputField.value);
    inputField.value = currentValue + 1;
}
function decrease(id) {
    const inputField = document.getElementById(id);
    let currentValue = parseInt(inputField.value);
    if (currentValue > 1) {
        inputField.value = currentValue - 1;
    }
}
function stockDecrease(id){
    const display=document.getElementById(id);
    let currentValue = parseInt(display.value);
    if (currentValue > 0) {
        display.value = currentValue - 1;
    }
}
function stockIncrease(id){
    const inputField = document.getElementById(id);
    let currentValue = parseInt(inputField.value);
    inputField.value = currentValue + 1;
}
function handleIncrease(inputFieldId, displayFieldId) {
    increase(inputFieldId); 
    stockDecrease(displayFieldId);  
}
function handleDecrease(inputFieldId, displayFieldId){
    decrease(inputFieldId); 
    stockIncrease(displayFieldId);  
}

function buybutton(id){
    alert('Thank you for purchasing!');
}

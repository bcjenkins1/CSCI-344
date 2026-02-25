let count = 0;
let countEl = document.querySelector("#counter");



function changeCounter(direction){
    if(direction === 'inc')
        count += 1;
    else if(direction === 'dec')
        count -= 1;
    else
        count = 0;

    updateDisplay();

}

function updateDisplay(){
    if(count > 0){
        countEl.innerHTML = count;
        countEl.style.color = '#4CAF50';
    }else if (count < 0){
        countEl.innerHTML = count;
        countEl.style.color = '#f44336';
    }else {
        countEl.innerHTML = count;
        countEl.style.color = '#808080';
    }
}
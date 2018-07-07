(function(){
    
    document.querySelectorAll('.number').forEach( el => el.addEventListener('click', numbersPress));
    document.querySelectorAll('.oper').forEach( el => el.addEventListener('click', operPress));
    document.querySelector('.equals').addEventListener('click', calculatePress);
    document.querySelector('.sqrt').addEventListener('click', sqrtPress);
    document.querySelector('.clear').addEventListener('click', clearDisplay);
    const display = document.querySelector('.display');
    
    function numbersPress(){
        display.value += event.target.innerText;
    }
    
    function operPress(){
        display.value += event.target.innerText;
    }
    function calculatePress() {
        display.value = eval(display.value);
    }
    
    function sqrtPress() {
       display.value = Math.sqrt(display.value);
    }
    function clearDisplay() {
        display.value = '';
    }
    
    
}
)();
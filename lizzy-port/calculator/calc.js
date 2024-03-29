
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.keys');
const display =document.querySelector('.display');
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key =e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType =calculator.dataset.previousKeyType;
        if (!action){
            if(displayedNum === '0' || previousKeyType === 'operator'){
                display.textContent = keyContent;
                calculator.dataset.previousKey = 'number';
            } else {
                display.textContent = displayedNum + keyContent
            }
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide' 
        ){
            key.classList.add('is-depressed');
            Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;


        }
        if(action === 'decimal'){
            display.textContent = displayedNum + '.'
            calculator.dataset.previousKey = 'decimal'
            
        }
        if(action=== 'clear'){
            if (key.textContent === 'AC'){
                calculator.dataset.firstValue =''
                calculator.dataset.operator = ''
                calculator.dataset.previousKeyType ='';
            } else {
                key.textContent = 'AC'
            }
            display.textContent = 0
            calculator.dataset.previousKeyType = 'clear'
        }
        // if(action !== 'clear'){
        //     const clearButton =
        //     calculator.querySelector('[data-action = clear]')
        //     clearButton.textContent = 'CE'
        // }
        const calculate = (n1, operator, n2) =>
        {
            let result = '';
            if (operator=== 'add'){
                result = parseFloat(n1) + parseFloat(n2);
            } else if (operator === 'subtract'){
                result = parseFloat(n1) - parseFloat(n2);
            } else if (operator === 'multiply') {
                result = parseFloat(n1) * parseFloat(n2);
            } else if (operator === 'divide') {
                result = parseFloat(n1) / parseFloat(n2);
            }
            return result
        }
        if(action=== 'calculate'){
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            display.textContent = calculate(firstValue, operator, secondValue)
            calculator.dataset.previousKeyType = 'calculate';
        }
    }
})

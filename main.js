let firstNum = '';
let secondNum = '';
let sign = '';
let finish = false;
console.log(firstNum);

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const signs = ['+','-','X','/'];

const screenCalc = document.querySelector('.calc-screen p');

function clearAll(){
    firstNum = '';
    secondNum = '';
    sign = '';
    finish = false;
}

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')){
        screenCalc.textContent = '0';
        clearAll();
        return;
    }

    if(event.target.classList.contains('clear')){
        if(secondNum == '' && sign == '' && firstNum !== ''){
            firstNum = Math.floor(firstNum / 10);
            screenCalc.textContent = firstNum;
        }

        if(sign !== '' && secondNum !== ''){
            secondNum = Math.floor(secondNum / 10);
            screenCalc.textContent = secondNum;
        }
    }

    const key = event.target.textContent;

    if(secondNum == '' && sign ==''){
        if(digit.includes(key)){
            firstNum += key;
            console.log(firstNum);
            screenCalc.textContent = firstNum;
        }
    }
    else if(secondNum!=='' && sign!=='' && finish){
        
    }
    else{
        if(digit.includes(key)){
            secondNum += key;
            screenCalc.textContent = secondNum;
            console.log(secondNum);
        }
    }

    if(signs.includes(key)){
        sign = key;
        console.log(key);
        screenCalc.textContent = sign;
    }

    if(key === '='){
        finish = true;
        switch (sign) {

            case '+':
                firstNum = Number(firstNum) + Number(secondNum);
                console.log('a');
                screenCalc.textContent = firstNum;
                break;

            case '-':
                firstNum-=secondNum;
                screenCalc.textContent = firstNum;
                break;

            case 'X':
                firstNum=firstNum*secondNum;
                screenCalc.textContent = firstNum;
                break;

            case '/':
                firstNum=firstNum/secondNum;
                screenCalc.textContent = firstNum;
                break;
        }
    }


}

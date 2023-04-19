
const bill = document.getElementById('bill');
const tipBtns = document.querySelectorAll('.tip');
const tipCostum = document.getElementsByClassName('costum');
const people = document.getElementById('num');
const errorMsg = document.querySelectorAll('.error');
const results = document.querySelectorAll('.number');
const resetBtn = document.querySelector('.btn');


bill.addEventListener("input", setBilValue );
tipBtns.forEach(btn => {
    btn.addEventListener('click',handleClick);
});

tipCostum[0].addEventListener('input',setTipCostumValue);
people.addEventListener('input',setPeopleValue);
resetBtn.addEventListener('click',reset);


let billValue = 0.0;
let  tipValue = 0.15;
let peopleValue = 1;




function setBilValue(){
    billValue = parseFloat(bill.value);
    console.log(billValue);
}

function handleClick(event){
    tipBtns.forEach(btn => {
        btn.classList.remove('btn-active');

        if(event.target.innerHTML == btn.innerHTML){
            btn.classList.add('btn-active');
            tipValue = parseFloat(btn.innerHTML)/100;
        }
    });
    tipCostum.value ='';
    calculateTip();
    //console.log(tipValue);
}
function setTipCostumValue(){

    tipValue = parseFloat(tipCostum[0].value/100);
    tipBtns.forEach(btn => {
        btn.classList.remove('btn-active')
    });
    
    if(tipCostum.value !== ''){
        calculateTip();
    }
}

function setPeopleValue(){
    peopleValue = parseFloat(people.value);
    console.log(peopleValue);
    if(peopleValue <= 0){
        errorMsg[0].style.display = "block";
    }else{
        errorMsg[0].style.display = "none";
    }
    if(peopleValue <= 0){
        errorMsg[1].style.display = "block";
    }else{
        errorMsg[1].style.display = "none";
    }
    calculateTip();
}
function calculateTip(){
    if (peopleValue >= 1) {
        let tipAmount = billValue * tipValue / peopleValue;
        let total = billValue * (tipValue + 1) / peopleValue;
        results[0].innerHTML = tipAmount.toFixed(2);
        results[1].innerHTML =   total.toFixed(2);
      }
}
function reset(){
    bill.value = '0.0';
    setBilValue();

    tipBtns[2].click();
    people.value = '1';
    setPeopleValuealue();
}
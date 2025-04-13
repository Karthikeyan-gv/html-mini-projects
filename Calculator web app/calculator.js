let addop=document.getElementById('add');
let subop=document.getElementById('sub');
let mulop=document.getElementById('mul');
let divop=document.getElementById('div');
let resop=document.getElementById('result');
let num1=10,num2=20,res;
function addfun(){
 resop.innerText=num1+num2;
}
function subfun(){
 resop.innerText=num1-num2;
}
function divfun(){
    resop.innerText=num1/num2;
}
function mulfun(){
    resop.innerText=num1*num2;
   }

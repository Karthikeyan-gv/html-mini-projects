let count=0;
let a=document.getElementById("number");
let b=document.getElementById("prevdata");
let c=document.getElementById("prevdata1");
function countfun()
{
    count=count+1;
    a.innerText=count;
}
function savefun()
{   c.innerText='Saved Count : ';
    let str= b.innerText+ ' ' + count + ' -';
    b.innerText=str;
    str=count;
}
function resetfun()
{
    a.innerText=0;
    alert('Count was Reseted !');
}

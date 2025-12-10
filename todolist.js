let input=document.getElementById('input');
let button=document.getElementById('button');
let tasklist=document.getElementById('tasklist');
let counter=document.getElementById('counter');

button.addEventListener('click',function(){
    let task=input.value.trim();
    let li = document.createElement('li');


    if(task===""){
        alert("enter a task");
        return;
    }

    let span=document.createElement('span');
    span.textContent=task;

    let donebtn=document.createElement('button');
    donebtn.textContent="Done";

    let deletebtn=document.createElement('button');
    deletebtn.textContent="Delete";

    donebtn.addEventListener('click',function(){
        span.style.textDecoration='line-through';
    });

    deletebtn.addEventListener('click',function(){
        tasklist.removeChild(li);
        updateCounter();

    });
    li.appendChild(span);
    li.appendChild(donebtn);
    li.appendChild(deletebtn);

    tasklist.appendChild(li);

    input.value="";

    updateCounter();

    if(task==="null"){
        alert("enter a task");
        return;
    }
});

function updateCounter(){
    let total=tasklist.getElementsByTagName('li').length;
    counter.textContent="total task:"+ total;

}

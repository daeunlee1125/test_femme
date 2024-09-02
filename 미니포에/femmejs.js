var drop1=document.getElementById('drop1');
var drop2=document.getElementById('drop2');
var total=document.getElementById('total');
var num = document.getElementById('개수');
var plusb=document.getElementById('plus');
var minusb = document.getElementById('minus');
var won = 0;
var n=0;


document.getElementById('detailsButton').addEventListener('click', function() {
    var infoContainer = document.getElementById('infoContainer');
    if (infoContainer.classList.contains('open')) {
        infoContainer.classList.remove('open');
    } else {
        infoContainer.classList.add('open');
    }
});




function buynow(){
    
    if (won>0){
        window.location.href="https://www.femmemuse.co.kr/member/login.html?noMember=1&returnUrl=%2Forder%2Forderform.html%3Fbasket_type%3DA0000%26delvtype%3DA&delvtype=A"
        
    }
    else{
        alert("필수 옵션을 선택해주세요.")
    }
}

var but1=document.getElementById('buyn');
var but2=document.getElementsByClassName('login');
var but3=document.getElementsByClassName('선택');
var but4 = document.getElementById('but');

function mode1(){
    for (i=0;i<but2.length;i++){
        but2[i].style.backgroundColor="gray";
        but2[i].style.color="white";
    }
    for (i=0;i<but3.length;i++){
        but3[i].style.backgroundColor="rgb(40, 40, 40)";
        but3[i].style.color="white";
    }
    
    but1.style.backgroundColor="rgb(30,30,30)";
    but4.style.color="white";
}
function mode2(){
    for(i=0;i<but2.length;i++){
        but2[i].style.backgroundColor="white";
        but2[i].style.color="black";
    }
    for (i=0;i<but3.length;i++){
        but3[i].style.backgroundColor="white";
        but3[i].style.color="black";
    }
    
    but1.style.color="white";
    but1.style.backgroundColor="black";
    but4.style.color="black";
}

function update(){
    var pr1 = parseInt(drop1.value);
    var pr2 = parseInt(drop2.value);
    
        
    if (pr1 > 0 && pr2 > 0){
        won=12000;
        n=1
        plusb.style.display="inline-block";
        minusb.style.display="inline-block";
    } 
    else{
        plusb.style.display="none";
        minusb.style.display="none";
    }
    
    total.textContent = won.toLocaleString();
    num.textContent = n.toLocaleString();
}
function plus(){
    if (won>0){
        won+=12000;
        n+=1;
    }
    total.textContent=won.toLocaleString();
    num.textContent = n.toLocaleString();
}
function minus(){
    if (won>0){
        won-=12000;
        n-=1;
        if (won==0){
            plusb.style.display="none";
            minusb.style.display="none";
        }
    }
                  
    total.textContent=won.toLocaleString();
    num.textContent = n.toLocaleString();
}
drop1.addEventListener('change', update);
drop2.addEventListener('change', update);
개수.addEventListener('change', update);



let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","blue","green"];
let started=false;
let level=0;
let maxlevel=0;
let h2=document.querySelector("h2"); 
let h4=document.querySelector("h4");
document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game started");
    started=true;
    document.querySelector('body').style.backgroundColor='white';
    document.querySelector('body').style.color='black';
    levelUp();
                     }                         });
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
                       }

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
                          },250); 
                      }

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250);
                       }

function levelUp(){
  userSeq=[];
  let randIdx=Math.floor(Math.random()*4);
  let randColor=btns[randIdx];
  let randBtn=document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
  level++;
  h2.innerText=`Level ${level}`;
  h4.innerHTML=`<i class="fa fa-line-chart" aria-hidden="true"></i> Highest Score :<b>${maxlevel}</b>`;
                    }

function btnPress() {
  console.log("button was pressed");
  let btn=this;
  userFlash(btn);
  userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userColor);
  checkAns(userSeq.length-1);
                     } 

let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
  btn.addEventListener('click',btnPress);
                   }                      

function checkAns(idx){
  if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000);
                                      }
                                 }
  else{
    if(level>0)level--;
    if(level>maxlevel)maxlevel=level;
    h2.innerHTML=`Game Over! Your score was <b>${level}</b> Press any key to Re-Start.<i class="fa fa-repeat" aria-hidden="true"></i>`;
    h4.innerHTML=`<i class="fa fa-line-chart" aria-hidden="true"></i> Highest Score :<b>${maxlevel}</b>`;
    document.querySelector('body').style.backgroundColor='red';
    setTimeout(function(){
  document.querySelector('body').style.color='black';
    },150);
   reset();
      }
                       }
function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0
                }                      
                      
                 




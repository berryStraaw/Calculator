/* const menubutton=document.querySelector("#menubtn");
const sidebar=document.querySelector(".sidebar");
menubutton.onclick= function(){
    sidebar.classList.toggle("active");
} */
const githover=document.querySelector(".gitIcon");
const personalProjects=document.querySelector(".personalProjects");
const githover2=document.querySelector(".hiddenLayer");
const hiddenLayer=document.querySelector('.hiddenLayer')
githover.onmouseover = function(){
    personalProjects.style.cssText='height:64px';
}; 
githover.onmouseout=function(){
    personalProjects.style.cssText="height:24px";
};
githover2.onmouseover = function(){
    personalProjects.style.cssText='height:64px';
}; 
githover2.onmouseout=function(){
    personalProjects.style.cssText="height:24px";
};
function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

function multi(array){
    let total=1;
  for(i in array){
    total*=array[i];
  }
  return total;
}

function divide(a, b){
    return a/b;
}

function power(a, b){
    return a**b;
}

function factorial(a, result=1){
    if(a===0){
        return 1;
      }
    if(a===1){
        return result;
    }
    else {
        return factorial(a-1, a*result);
    }
}

function sum(array){
    let total=0;
  for(i in array){
    total+=array[i];
  }
  return total;
}

/* console.log(sum([1,2,3]));
console.log("Runnin"); */

function opp(sign, a, b){
    if(sign=="+"){
        return add(a,b);
    }
    if(sign=="-"){
        return sub(a,b);
    }
    if(sign=="*"){
        return multi([a,b]);
    }
    if(sign=="/"){
        return divide(a,b);
    }
    if(sign=="^"){
        return power(a,b);
    }
    if(sign=="!"){
        return factorial(a);
    }
}
function buildStr(sign, a, b){
    text1.textContent=a+" "+sign+" " + b;
}
function clear(){
        a='';
        b='';
        sign='';
        text1.textContent='';
        text2.textContent='';
}
function addStr(id, num){
    let [trash, numCheck]= num.split(' ');
    /* text1.textContent=text1.textContent + id + numCheck; */
    if(text2.textContent!=''){
        clear();
        if(!numCheck){
            return; 
        }
    }
    if(id=="AC"){
        clear();
        return;
    }
    if(id=="="){
        text2.textContent=opp(sign,a,b);
        return;
    }
    
    if(numCheck=='num'){
        if(a==""){
            a=id;
        }
        else{
            if(sign!=""){
                if(b==""){
                    b=id;
                }
                else{
                    b+=id;
                }
            }
            else{
                a+=id;
            } 
        }   
    }      
    if(!numCheck){
        if(a==""){
          text1.textContent="please enter a number first";  
          return;
        }
        else{
           sign=id; 
        }
    }
    buildStr(sign, a, b);
}
/* console.log(opp("!",4)); */

const buttonBox=document.querySelector('.buttonBox');
const buttons=buttonBox.querySelectorAll('button');
const text1=document.querySelector('.text1');
const text2=document.querySelector('.text2');
let a='';
let b='';
let sign='';
text1.textContent='';
text2.textContent='';
buttons.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        addStr(e.target.id, e.target.className);
        /* text1.textContent=text1.textContent + e.target.id; */
    });
});


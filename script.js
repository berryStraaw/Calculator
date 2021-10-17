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
    if(typeof a=="string"){
        a=parseFloat(a,10);
    }
    if(typeof b=="string"){
        b=parseFloat(b,10);
    }
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

function percentage(a,b){
    return a*b/100;
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
    str=a+" "+sign+" " + b;
    if(str.length>25){
        str=str.slice(-25);
    }
    return str;
    /* text1.textContent=str; */

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
    if(id=="del"){
        if(b!=""){
            b=b.substring(0,b.length-1)
        }
        else if(sign!=""){
            sign="";
        }
        else if(a!=""){
            a=a.substring(0,a.length-1)
        }
    }
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
        let ans;
        if(sign=="!"){
            b=1;
        }
        
        if(b==""){

        }
        else if(sign=="!"){
            if(String(a).includes(".")){
                text2.textContent="nu-ugh that's illegal";
            }
            else{
                ans=opp(sign,a,b);
                ans=Math.round(ans * 100000) / 100000; 
             }
        }
        else{
           ans=opp(sign,a,b);
            ans=Math.round(ans * 100000) / 100000; 
        }
        if(isNaN(ans)){
        }
        else{
          text2.textContent=ans;   
        }
        if(sign=="/"){
            if(b==0){
                text2.textContent="nu-ugh that's illegal";
            }
        }
        return;
    }
    if(id=="%"){
        if(sign!=""){
            if(sign=="+" || sign=="-"){
                b=percentage(a,b);
            }
            else{
                b/=100;
            }
        }
        else{
            a/=100;
        }
     }
    if(id=="!"){
        if(sign!=""){
            ans=opp(sign,a,b);
            ans=Math.round(ans * 100000) / 100000; 
            a=ans;
            b="";
            sign=id;
        }
        else{
            sign=id;
        }
    }
    if(numCheck=='num'){
        if(a==""){
            if(id=="."){
                a=0;
                a+=id;  
            }
            else{
             a=id;   
            }
        }
        else{
            if(sign!=""){
                if(id=="."){
                    if(b.includes(".")){
                        return;
                    }
                }
                if(b==""){
                    if(id=="."){
                        b=0;
                        b+=id;  
                    }
                    else{
                     b=id;   
                    }
                }
                else{
                    b+=id;
                }
            }
            else{
                if(id=="."){
                   if(a.includes(".")){
                    return;
                    } 
                }
                
                a+=id;
            } 
        }   
    }      
    if(!numCheck){
        if(a=="" && id!="del"){
          text1.textContent="please enter a number first";  
          return;
        }
        else if(id=="%"){
        }
        else if(id=="!"){}
        else if(sign=="" && id!="del"){
            sign=id;
        }
        else{
            if(b!="" && id!="del"){
                ans=opp(sign,a,b);
                ans=Math.round(ans * 100000) / 100000; 
                a=ans;
                b="";
                sign=id;
            }
            else if(id!="del"){
                sign=id; 
            } 
        }
        
    }

    let fullString=buildStr(sign, a, b);
    text1.textContent=fullString;
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

document.addEventListener("keydown",(event)=>{
    if(event.key==="Backspace"){
        document.getElementById('del').click();
     }
});
document.addEventListener("keypress",(event)=>{
    if(event.key==="1"){
       document.getElementById('1').click();
    }
    if(event.key==="2"){
        document.getElementById('2').click();
     }
     if(event.key==="3"){
        document.getElementById('3').click();
     }
     if(event.key==="4"){
        document.getElementById('4').click();
     }
     if(event.key==="5"){
        document.getElementById('5').click();
     }
     if(event.key==="6"){
        document.getElementById('6').click();
     }
     if(event.key==="7"){
        document.getElementById('7').click();
     }
     if(event.key==="8"){
        document.getElementById('8').click();
     }
     if(event.key==="9"){
        document.getElementById('9').click();
     }
     if(event.key==="0"){
        document.getElementById('0').click();
     }
     if(event.key==="c"){
        document.getElementById('AC').click();
     }
     if(event.key==="+"){
        document.getElementById('+').click();
     }
     if(event.key==="-"){
        document.getElementById('-').click();
     }
     if(event.key==="*"){
        document.getElementById('*').click();
     }
     if(event.key==="/"){
        document.getElementById('/').click();
     }
     if(event.key==="^"){
        document.getElementById('^').click();
     }
     if(event.key==="=" || event.key==="Enter"){
        document.getElementById('=').click();
     }
     if(event.key==="!"){
        document.getElementById('!').click();
     }
     if(event.key==="%"){
        document.getElementById('%').click();
     }
     if(event.key==="."){
        document.getElementById('.').click();
     }
});


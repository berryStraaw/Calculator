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
    if(sign=="**"){
        return power(a,b);
    }
    if(sign=="!"){
        return factorial(a);
    }
}

console.log(opp("!",4));
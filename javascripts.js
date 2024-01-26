let button = document.querySelectorAll('.nb');
let number = document.querySelectorAll('.number');
let deleteenter = document.querySelectorAll('.fas');
var result = document.querySelectorAll('.result');
var check1 = document.querySelectorAll('.checkcorrect');
var check2 = document.querySelectorAll('.checkpositioncorrect');
var notification1 = document.querySelector('.notification1');
var notification2 = document.querySelector('.notification2');
var bt = document.querySelectorAll('.bt');
var bt1 = document.querySelector('.bt1');
var bt2 = document.querySelector('.bt2');
var rl = document.querySelector('.rl');
var back = document.querySelector('.back');
//xu li ham radom 1 so ngau nhieu voi cac chu so khac nhau
let rd;
function rdom(){
let ok1=0;
while(ok1===0){
  rd=(Math.floor(Math.random()*8999)+1000).toString();
  let ok=0;
  for(let i=0; i<rd.length-1; i++){
    for(let j=i+1; j<rd.length; j++){
        if(rd[i]===rd[j]){
            ok=1;
        }
    }
  }
  if(ok===1){
    continue;
  }else{
    ok1=1;
  }
}
console.log(rd);
}
rdom();
//xu li su kien click tung so
for(var i=0; i<button.length; i++){
    button[i].addEventListener('click', (function(j){
        return function() {
            result1(j.toString());
        }
   })(i));
}
let index=0;
function result1(a){
    if(index<4){
    number[index].textContent = a;
    index++;
    }
}
//xu li su kien xoa 1 phan tu
deleteenter[0].addEventListener('click',function(){
    if(index>0){
    index--;
    number[index].textContent = '';
    }
})
//xu li su kien enter kq
let cnt=0;
deleteenter[1].addEventListener('click',function(){
    if(cnt<=9){
    if(index===4){
        //dem so vi tri dung
        let numbercorect=0;
        let positioncorect=0;
        const mySet = new Set();
        let setvalues = mySet.values();
        for(let i=0; i<=3; i++){
            mySet.add(number[i].textContent);
            if(number[i].textContent == rd[i]){
                positioncorect++;
            }
        }
        check2[cnt].textContent = positioncorect.toString();
        // console.log(positioncorect);
    
        //dem so so dung
        rd=rd.toString();
        for(let value of setvalues){
            let ok2=0;
            for(let i=0; i<rd.length; i++){
            if(value == rd[i]){
                  numbercorect++;
            }
            }
        }
        check1[cnt].textContent = numbercorect.toString();

        if(numbercorect==4 && positioncorect==4){
            notification1.style.display = 'block';
        }
        // console.log(numbercorect);

        //xu li su kien xoa het phan tu
        let rs = '';
        for(var i=0; i<=3; i++){
            rs+=number[i].textContent+' ';
            number[i].textContent='';
        }
        result[cnt].textContent = rs;
        cnt++;
        index=0;
        if(cnt==10 && numbercorect!=4 && positioncorect!=4){
            notification2.style.display ='block';
        }
    }
}

})
//xu li phan again
for(let i=0; i<=1; i++){
    bt[i].addEventListener('click', (function(j){
        return function() {
            again(j);
        }
   })(i));
}

function again(a){
    cnt=0;
    if(a==0){
        notification1.style.display ='none';
    }else if(a==1){
        notification2.style.display ='none';
    }
    for(let i=0; i<=9; i++){
        result[i].textContent = '';
        check1[i].textContent = '';
        check2[i].textContent = '';
    }
    rdom();
}

//xu li phan rule
bt1.addEventListener('click',function(){
    for(let i=0; i<=9; i++){
        result[i].textContent = '';
        check1[i].textContent = '';
        check2[i].textContent = '';
    }
    rdom();
    cnt=0;
})

bt2.addEventListener('click',function(){
  rl.style.display = 'block'
})
back.addEventListener('click',function(){
    rl.style.display = 'none';
})


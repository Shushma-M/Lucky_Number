var ip1=document.querySelector("#input1");
var ip2=document.querySelector("#input2");
var clck=document.querySelector("#btnClick");
var cls=document.querySelector("#close");
var op=document.querySelector("#output");
var sum=0;

function eventHandler(){
    var inp1=ip1.value;
    var inp2=ip2.value;
    var temp1=inp1.replace(/-/g,"");
    var len=temp1.length;
    var temp2=parseInt(temp1);
    var temp3=0;
    for(var i=len;i>1;i--){
        temp3=temp2%10;
        sum=sum+temp3;
        temp2=temp2/10;
        temp2=parseInt(temp2);
    }
    sum=sum+temp2;
    var res=sum%inp2;
    if(res === 0){
        var opmsg="You are right, That's your Lucky Number"
    }
    else{
        var opmsg="Oops!, That's not your Lucky Number"
    }
    op.innerText=""+opmsg;
    sum=0;
}
function closeAction(){
    document.getElementById("notice").style.display = 'none';
}
cls.addEventListener("click",closeAction);
clck.addEventListener("click",eventHandler);

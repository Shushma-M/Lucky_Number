var ip1=document.querySelector("#input1");
var ip2=document.querySelector("#input2");
var clck=document.querySelector("#btnClick");
var cls=document.querySelector("#close");
var op=document.querySelector("#output");
var sum=0;
function enableButton(){
    console.log(ip1.value);
    console.log(ip2.value);
    if (ip1.value != "" && ip2.value != "") {
        clck.disabled = false;
    } else {
        clck.disabled = true;
    }
}
function eventHandler(){
    // document.querySelectorAll("animate").forEach(element => {
    //     element.beginElement();});
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
        var opmsg="That's your Lucky Number";
        document.getElementById("ball").style.fill = "green";
        op.style.color= "#006400";
        op.style.backgroundColor= "rgba(124,252,0, 0.5)";
    }
    else{
        var opmsg="That's not your Lucky Number";
        document.getElementById("ball").style.fill = "red";
        op.style.color= "#B22222";
        op.style.backgroundColor= "rgba(240,128,128, 0.5)";
    }
    op.innerHTML = opmsg;
    sum=0;
    
   
}
function closeAction(){
    document.getElementById("notice").style.display = 'none';
}
cls.addEventListener("click",closeAction);
ip1.addEventListener("change", enableButton);
ip2.addEventListener("change", enableButton);
clck.addEventListener("click",eventHandler);

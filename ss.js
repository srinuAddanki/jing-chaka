let a=document.querySelector("#bulb1");
let x=document.querySelector("#bulb2");
let z=document.querySelector("#bulb3");
let b=document.querySelector("#on");
let c=document.querySelector("#off");

b.addEventListener("click",(value)=>{
    
    a.style.backgroundColor="orange";
    x.style.backgroundColor="orange";
    z.style.backgroundColor="orange";
});
c.addEventListener("click",(value)=>{
    
    a.style.backgroundColor="white";
    x.style.backgroundColor="white";
    z.style.backgroundColor="white";
});


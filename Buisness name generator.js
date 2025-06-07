// method-1 :
a=Math.floor(Math.random()*3)
let Adjective1
if(a==0) Adjective1="Crazy";
else if(a==1)Adjective1="Amazing";
else  Adjective1="Fire";


b=Math.floor(Math.random()*3)
let Adjective2
if(b==0) Adjective2="Engine";
else if(b==1) Adjective2="Foods";
else Adjective2="Garments";


c=Math.floor(Math.random()*3)
let Adjective3
if(c==0) Adjective3="Bros";
else if(c==1) Adjective3="Limited";
else Adjective3="Hub";
console.log("Random Numbers are :",a,b,c)
console.log("The Generated Name is :"+Adjective1+" "+Adjective2+" "+Adjective3);



console.log("----------------------------------------------------------------------------------------------------")



// method-2 :
let obj1 = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}
let obj2 = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
};
let obj3 = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
};

var ran1 = Math.floor(Math.random() * 3) + 1;
var ran2 = Math.floor(Math.random() * 3) + 1;
var ran3 = Math.floor(Math.random() * 3) + 1;

console.log("Random Numbers are :",ran1,ran2,ran3)
console.log("The Generated Name is :"+obj1[ran1] + " " + obj2[ran2] + " " + obj3[ran3]);

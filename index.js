

let hasbj=false;
let isAlive=false;
let msg=" ";

let tc=0,foc=0;

// let msgEl=document.querySelector("#message-el");
// console.log(msgEl);

// console.log(msgEl);

let cardsEl=document.getElementById("cards-el");
let fc,sc;
let sum=0;
let cards=[];
let player={
    per: "Per",
    dollar:145
}
function start() {
    if(player.dollar<=0){
        document.getElementById("message-el").textContent="PLEASE RELOAD THE PAGE YOU ARE OUT OF CREDITS ";
    }
    cardsopp=[];
    sumopp=0;
    document.getElementById("cardsopp-el").textContent="Cards : ";
    document.getElementById("sumopp").textContent="SUM : ";
    isAlive=true;
    hasbj=false;
    fc=getRandomCard();
    sc=getRandomCard();
    sum=fc+sc;
    cards=[fc,sc];
    if(player.dollar>=0)
    rendergame();    
}

function dikhao(){
let perEl=document.getElementById("per");
console.log(perEl);
perEl.textContent=player.per +" $ "+player.dollar;
}
let sumopp=0;
function rendergame(){
    if(sum<21){
        msg="Do you want to draw a new card? <3";
        dikhao();
    }
    else if(sum===21){
        msg="Wohoo! You've got Blackjack <3";
        player.dollar+=20;
        hasbj=true;
        dikhao();
    }
    else{
        msg="You're out of the game <3 You lose";
        player.dollar-=20;
        isAlive=false;
        dikhao();
    }
    let msgEl = document.querySelector("#message-el")

    msgEl.textContent = msg
    
    
    cardsEl.textContent="Cards : ";
    for (let index = 0; index < cards.length; index++) {
        cardsEl.textContent+= " "+cards[index];
        
    }
    let sumEl=document.getElementById("sum");
    sumEl.textContent="Sum : ";
    sumEl.textContent+=sum;
    document.getElementById("message-el").textContent=msg;

    if(hasbj===true){
        console.log(hasbj);
    }
    if(hasbj===false){
        console.log(hasbj);
    }
    console.log(isAlive);
}
function rendergameopp(){
    if(player.dollar<=0){
        isAlive=false;
        hasbj=true;
    }
    if(isAlive===true && hasbj===false){
    if(sumopp>21 ){
            msg="YOU WON";
            player.dollar+=20;
            console.log("fds");
            hasbj=true;
            dikhao();
    }
    if(sumopp<=sum){
        
        
        
        newcardopp();
        
        dikhao();
    }
    else if(sumopp===21){
        msg="YOU LOSE";
        player.dollar-=20;
        hasbj=true;
        dikhao();
    }
    else if(sumopp>sum && sumopp<=21) {
        msg=" You lose";
        player.dollar-=20;
        
        isAlive=false;
        dikhao();
    }
    
    let msgEl = document.querySelector("#message-el")

    msgEl.textContent = msg;
    let cardsoppEl=document.getElementById("cardsopp-el");
    
    cardsoppEl.textContent="Cards : ";
    for (let index = 0; index < cardsopp.length; index++) {
        cardsoppEl.textContent+= " "+cardsopp[index];
        
    }
    let sumoppEl=document.getElementById("sumopp");
    sumoppEl.textContent="Sum : ";
    sumoppEl.textContent+=sumopp;
    if(sumopp<sum){
        newcardopp();
    }
    document.getElementById("message-el").textContent=msg;
    if(hasbj===true){
        console.log(hasbj);
    }
    if(hasbj===false){
        console.log(hasbj);
    }
    console.log(isAlive);
}
}
function newcard() {
    if(player.dollar<=0){
        isAlive=false;
        hasbj=true;
    }
   if(isAlive===true && hasbj===false){
    tc=getRandomCard();
    cards.push(tc);
    console.log("newcard");
    sum+=tc;
    rendergame();
   }
}
function newcardopp() {
    if(player.dollar<=0){
        isAlive=false;
        hasbj=true;
    }
   if(isAlive===true && hasbj===false){
    tcopp=getRandomCard();
    cardsopp.push(tcopp);
    console.log("newcard");
    sumopp+=tcopp;
    rendergameopp();
   }
}

function getRandomCard(){
    let m= Math.random()*13;
    let f= Math.floor(m+1);
    if(f==1){
        return 11;
    }
    else if(f>=11 && f<=13){
        return 10;
    }
    else{
        return f;
    }
}
function rn(){
    return (Math.floor(Math.random())*13)+1;
}
let cardsopp=[];
function opp(){
    let fco=getRandomCard();
    let sco=getRandomCard();
    cardsopp=[fco,sco];
    sumopp=fco+sco;
    rendergameopp();
    
}
let airbnb={
    isavail:true,
    name:"sagar",
    hello:[1,2,3,4,5]
}
console.log(airbnb);
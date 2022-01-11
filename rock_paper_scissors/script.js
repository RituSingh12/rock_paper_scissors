let head=document.querySelector(".head")
let startbtn=document.getElementById("start");
let youhand=document.getElementById("youHand");
let computerHand=document.getElementById("computerHand");
let resultbox=document.getElementById("resultbox");

let human=0;
let computer=0;
let rockhand=`<i class="fas fa-hand-rock fa-5x " ></i>`;
let paperhand=`<i class="fas fa-hand-paper fa-5x " ></i>`;
let scissorshand=`<i class="fas fa-hand-scissors fa-5x "></i>`;
let arr=[rockhand,paperhand,scissorshand];

let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissors=document.getElementById("scissors");
let playerOptions=[rock,paper,scissors];

let h=document.getElementById("you");
let c=document.getElementById("computer");

playerOptions.forEach((element, index)=> {

    // computer and player choise
    element.addEventListener('click',()=>{
        let u=2*Math.random()
        let b=Math.round(u)
        computerHand.innerHTML=arr[b];
        youhand.innerHTML=arr[index];

        // condation for win and lose game
        if(index ===b){
            resultbox.innerText="TIE";
        }
        else if((index===2 && b===1) || (index===0 && b===2) || (index===1 && b===0)){    
            human+=1;
            h.innerText=`You : ${human}`;
            resultbox.innerText="YOU WIN";
        }
        else {
            computer+=1
            c.innerText=`Computer : ${computer}`;
            resultbox.innerText="COMPUTER WIN";
        }
    })
});


// start and restart function
startbtn.addEventListener("click",()=>{

    head.style.display="block";
    startbtn.innerText="Restart";

    if(youhand!="" && computerHand!=""){
        h.innerText=`You : 0`;
        c.innerText=`Computer : 0`;
        resultbox.innerText="";
        youhand.innerHTML=`<i class="fas fa-user-alt fa-3x" id="human"></i>`;
        computerHand.innerHTML=`<i class="fas fa-robot fa-3x" id="robot"></i>`;
    }
})
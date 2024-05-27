const stick1 = document.querySelector(".color1");
const stick2 = document.querySelector(".color2");
const stick3 = document.querySelector(".brush3");
const box = document.querySelector(".box");
const lines = document.querySelector(".lines");
const page1 = document.querySelector("#page-1");
const page2 = document.querySelector("#page-2");
const page3 = document.querySelector("#pages");
const email = document.querySelector("#m-email");
const me = document.querySelector("#me");
const semail = document.querySelector("#s-email");
const se = document.querySelector("#se");
//texxt1
const texxt1 = document.querySelector("#texxt1");
const icon1 = document.querySelector("#icon1");
const dropbox1 = document.querySelector("#dropbox1");
//texxt2
const texxt2 = document.querySelector("#texxt2");
const icon2 = document.querySelector("#icon2");
const dropbox2 = document.querySelector("#dropbox2");
//texxt3
const texxt3 = document.querySelector("#texxt3");
const icon3 = document.querySelector("#icon3");
const dropbox3 = document.querySelector("#dropbox3");
//texxt4
const texxt4 = document.querySelector("#texxt4");
const icon4 = document.querySelector("#icon4");
const dropbox4 = document.querySelector("#dropbox4");
//texxt5
const texxt5 = document.querySelector("#texxt5");
const icon5 = document.querySelector("#icon5");
const dropbox5 = document.querySelector("#dropbox5");
//texxt6
const texxt6 = document.querySelector("#texxt6");
const icon6 = document.querySelector("#icon6");
const dropbox6 = document.querySelector("#dropbox6");

//make reverse animation trigger
setTimeout(()=>{
  stick2.style.animation = "movedown 0.4s ease forwards";
},2550)

setTimeout(()=>{
  stick3.style.animation = "movedown 0.4s ease forwards";
},2950)

setTimeout(()=>{
  stick1.style.animation = "opacity 0.4s ease forwards";
  lines.style.display = "flex"
},3350)

setTimeout(()=>{
  box.style.animation = "remo 0s ease forwards"
},3350)

//page shifting code
// Function to handle the transition from page1 to page2
function transitionToPage2() {
  page1.style.display = "none";
  page2.style.display = "flex";
  page3.style.display = "flex";
  
  // Store in sessionStorage that the animation has been completed
  sessionStorage.setItem('animationCompleted', 'true');
}

// Get the state of animation from sessionStorage
const animationCompleted = sessionStorage.getItem('animationCompleted');

// Ensure page1 is shown initially for the animation
page1.style.display = "flex";
page2.style.display = "none";
page3.style.display = "none";


// Run the animation always when the page loads
setTimeout(() => {
  transitionToPage2();
}, 4100);


const colors = [
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#FF33A1",
  "#33FFF7",
  "#A133FF",
  "#FF8C33",
  "#33FF8C",
  "#8C33FF",
  "#FF3387",
  "#FF0000",
  "#0000FF",
  "#800080",
  "#FF1493",
  "#1E90FF",
  "#9400D3",
  "#FFD700",
  "#00FA9A",
  "#DC143C",
  "#4682B4",
  "#6A5ACD",
  "#FF4500",
  "#7CFC00",
  "#DA70D6",
  "#FF6347",
  "#00CED1",
  "#BA55D3",
  "#FFA500",
  "#8A2BE2",
  "#ADFF2F",
];

colors.map((color)=>{
  const line = document.createElement("div");
  const randomMargin = Math.floor(Math.random()*1000);

  line.className = "line";
  line.style.setProperty('--m', `${randomMargin}px`);
  line.style.setProperty('--c', color);
  lines.appendChild(line)
})

function checkInputs() {
    if(email.value.trim() === ""){
        me.style.display = "block";
    }else{
        me.style.display = "none";
    }
}

email.addEventListener('input',checkInputs)
checkInputs()

function checkinputs() {
  if(semail.value.trim() === ""){
    se.style.display = "block"
  }else{
    se.style.display = "none"
  }
}

semail.addEventListener('input',checkinputs)
checkinputs()

//all transitions of texxt1
texxt1.addEventListener('click',()=>{
  rotate1();
  visible1();
})

function rotate1(){
  if(icon1.style.transform === "rotate(-45deg)"){
    icon1.style.transform = "rotate(0deg)"
  }else{
    icon1.style.transform = "rotate(-45deg)"
  }
}

function visible1(){
  if(dropbox1.style.display === "block"){
    dropbox1.style.display = "none"
  }else{
    dropbox1.style.display = "block"
  }
}

//all transitions of texxt2
texxt2.addEventListener('click',()=>{
  rotate2();
  visible2()
})

function rotate2(){
  if(icon2.style.transform === "rotate(-45deg)"){
    icon2.style.transform = "rotate(0deg)"
  }else{
    icon2.style.transform = "rotate(-45deg)"
  }
}

function visible2(){
  if(dropbox2.style.display === "block"){
    dropbox2.style.display = "none"
  }else{
    dropbox2.style.display = "block"
  }
}

//all transitions of texxt3
texxt3.addEventListener('click',()=>{
  rotate3();
  visible3();
})

function rotate3(){
  if(icon3.style.transform === "rotate(-45deg)"){
    icon3.style.transform = "rotate(0deg)"
  }else{
    icon3.style.transform = "rotate(-45deg)"
  }
}

function visible3(){
  if(dropbox3.style.display === "block"){
    dropbox3.style.display = "none"
  }else{
    dropbox3.style.display = "block"
  }
}

//all transitions of texxt4
texxt4.addEventListener('click',()=>{
  rotate4();
  visible4();
})

function rotate4(){
  if(icon4.style.transform === "rotate(-45deg)"){
    icon4.style.transform = "rotate(0deg)"
  }else{
    icon4.style.transform = "rotate(-45deg)"
  }
}

function visible4(){
  if(dropbox4.style.display === "block"){
    dropbox4.style.display = "none"
  }else{
    dropbox4.style.display = "block"
  }
}


//all transitions of texxt5
texxt5.addEventListener('click',()=>{
  rotate5();
  visible5();
})

function rotate5(){
  if(icon5.style.transform === "rotate(-45deg)"){
    icon5.style.transform = "rotate(0deg)"
  }else{
    icon5.style.transform = "rotate(-45deg)"
  }
}

function visible5(){
  if(dropbox5.style.display === "block"){
    dropbox5.style.display = "none"
  }else{
    dropbox5.style.display = "block"
  }
}


//all transitions of texxt6
texxt6.addEventListener('click',()=>{
  rotate6();
  visible6();
})

function rotate6(){
  if(icon6.style.transform === "rotate(-45deg)"){
    icon6.style.transform = "rotate(0deg)"
  }else{
    icon6.style.transform = "rotate(-45deg)"
  }
}

function visible6(){
  if(dropbox6.style.display === "block"){
    dropbox6.style.display = "none"
  }else{
    dropbox6.style.display = "block"
  }
}

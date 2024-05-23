const stick1 = document.querySelector(".color1");
const stick2 = document.querySelector(".color2");
const stick3 = document.querySelector(".brush3");
const box = document.querySelector(".box");
const lines = document.querySelector(".lines");
const page1 = document.querySelector("#page-1");
const page2 = document.querySelector("#page-2");
const page3 = document.querySelector("#pages");
const email = document.querySelector("#email");

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

// email.addEventListener("input", () => {
//   if (email.value) {
//     email.style.backgroundColor = "rgba(255,255,255,0.1)";
//     email.style.borderRadius = "5px"
//   } else {
//     email.style.backgroundColor = "rgba(255,255,255,0.1)";
//     email.style.borderRadius = "5px"
//   }
// });

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

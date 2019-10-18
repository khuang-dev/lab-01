document.addEventListener("DOMContentLoaded", function () {
});

const hamburgerIcon = document.getElementById("hamburgericon");
const navigationDrop = document.getElementById("navigation");

hamburgerIcon.addEventListener("click", function(){
    navigationDrop.classList.toggle("show");
});
hamburgerIcon.addEventListener("blur", function(){
    navigationDrop.classList.remove("show");
});
    // for (screen.width>599) {}
//     } else {
//         navigationDrop.style.display="flex";
//         navigationDrop.style.width="100%";
//     }



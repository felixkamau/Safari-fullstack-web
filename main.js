var aboutlink = document.getElementById("about-link");
var homelink = document.getElementById("home-link")

// aboutlink.addEventListener("click", function(event){
//     event.preventDefault();
//     window.location.href = "about.html";
// });

function about(event){
    event.preventDefault();
    window.location.href = "about.html";
}
aboutlink.addEventListener("click", about);


function home(event){
    event.preventDefault();
    window.location.href = "home.html";
}
homelink.addEventListener("click", home);
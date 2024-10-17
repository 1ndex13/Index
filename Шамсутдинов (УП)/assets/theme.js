let switchMode = document.getElementById("switchMode");

// switchMode.onclick = function(){
//     let theme = document.getElementById("theme");

//     if(theme.getAttribute("href") == "assets/style.css"){
//         theme.href = "assets/light-mode.css";
//     }
//     else{
//         theme.href = "assets/style.css";
//     }
// }

const app = document.getElementById("app");
let f = true;
switchMode.onclick = function(){
    if (f) {
        app.classList.add("darkTheme");
        f = false;
    } else {
        app.classList.remove("darkTheme");
        f = true;
    }
}
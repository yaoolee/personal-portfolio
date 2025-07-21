window.onload= function(){
    const themeToggle= document.querySelector("#theme-toggle");   // select the toggle button

themeToggle.addEventListener("click", ()=>{
const body= document.body;

if(body.classList.contains('dark-mode')){         //checks if body has dark mode class i.e .dark-mode from css
    body.classList.remove('dark-mode');                // removes it if dark mode class exist
    const btn= themeToggle.style.backgroundColor="black";
}
else{
    body.classList.add('dark-mode');
    const btn= themeToggle.style.backgroundColor="red";
}

})
}


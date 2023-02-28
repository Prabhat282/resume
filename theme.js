var icon=document.getElementById("theme-icon");
icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        document.body.style.backgroundColor="#000";
    }
    else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
    if(icon.src=="Images/moon.png"){
        document.getElementById("theme-icon").style("backgroundColor:")
    }
    
}
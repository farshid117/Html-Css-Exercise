const menuIcon = document.querySelector(".menu")
console.log("menuIcon: ", menuIcon);
const hambergur = document.querySelector(".header_icon")
const hambergurIcon = document.querySelector(".header_icon i")

hambergur.addEventListener("click",()=>{
    console.log("click")
    menuIcon.classList.toggle("show")
if(hambergurIcon.classList.contains("fa-bars")){
    hambergurIcon.classList = "fa fa-times"
}else{
    hambergurIcon.classList = "fa fa-bars"
}
})
const menuList = document.querySelector(".menu")
console.log("menuList: ", menuList);
const hambergur = document.querySelector(".header_icon")
const hambergurIcon = document.querySelector(".header_icon i")
const liElm = document.querySelector(".menu__link")

function menuHandler(){
   
        console.log("click")
        menuList.classList.toggle("show")
        if (hambergurIcon.classList.contains("fa-bars")) {
            hambergurIcon.classList = "fa fa-times"
        } else {
            hambergurIcon.classList = "fa fa-bars"
        }
}
hambergur.addEventListener("click", (event)=>{
    event.stopPropagation()
    menuHandler()
})
menuList.addEventListener("click", menuHandler)
 document.body.addEventListener("click", () => {
    if (hambergurIcon.classList.contains("fa-times")) {
        hambergurIcon.classList = "fa fa-bars"
        menuList.classList.remove("show")
    }
}) 

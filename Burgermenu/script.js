let burgerIcon = document.createElement("button");
const navBar = document.querySelector("header nav");
const onglets = document.querySelector("header nav ul");

navBar.appendChild(burgerIcon);


burgerIcon.addEventListener("click", ()=> {

   onglets.classList.toggle("active");


});
window.addEventListener("resize", ()=>{

 if(window.innerWidth <= 1025){
   if(!navBar.contains(burgerIcon)){
     navBar.appendChild(burgerIcon);
   }else{

   }
   ;

 }else {
   burgerIcon.remove();
 }

 } 
);
burgerIcon.addEventListener("click", ()=>{
  onglets.classList.toggle("disable");
});
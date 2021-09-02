function chngtheme() {
    var img = document.getElementById('themeswitch').src;
    if (img.indexOf('assets/light.png')!=-1) {
        document.getElementById('themeswitch').src  = 'assets/dark.png';
    }
     else {
       document.getElementById('themeswitch').src = 'assets/light.png';
   }
   document.getElementById("body").classList.toggle("dark");
}

var filterCategory = document.querySelector(".categories");
var filterImages = document.querySelectorAll(".gridItem");

window.onload = () => {
    filterCategory.onclick = (selecteditem)=>{
        if(selecteditem.target.classList.contains("item")){
            filterCategory.querySelector(".active").classList.remove("active");
            selecteditem.target.classList.add("active");
            let filterName = selecteditem.target.getAttribute("data-name");
            filterImages.forEach((image) => {
                let filterImage = image.getAttribute("data-name");
                if((filterImage == filterName) || filterName == "all"){
                    image.style.display = "block";
                }
                else{
                    image.style.display = "none";
                }
            });
        }
    }
}



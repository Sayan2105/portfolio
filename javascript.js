function info(clickedItem){
  var hiddenContent = clickedItem.querySelector(".hidden");
  var arrow = clickedItem.querySelector(".down-arrow");
  if(!clickedItem.style.height ||clickedItem.style.height === "4rem"){
    clickedItem.style.height = "18rem";
    hiddenContent.style.display = "block";
    arrow.innerHTML = "🡡";
  }
  else { 
    clickedItem.style.height = "4rem";
    clickedItem.style.boxShadow = "1px 1px 7px rgb(255, 255, 255, 0.5)";
    hiddenContent.style.display = "none";
    arrow.innerHTML = "🡣";
  }
}
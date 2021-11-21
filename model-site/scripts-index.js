//SIDE PANEL 1
const sidePanelTop = document.getElementById("sidepanel-top");
const openClick = document.getElementById("openButton-top");
const closeClick = document.getElementById("closeButton-top");

const panelText1 = document.getElementById("panel-text1");

openClick.addEventListener("click", openNav);
closeClick.addEventListener("click", closeNav);

  function openNav() {
    sidePanelTop.style.width = "60%";
    closeClick.style.display = "block";
    openClick.style.display = "none";

    setTimeout(function(){
      panelText1.style.display = "block"}, 500);
  }
  
  function closeNav() {
    sidePanelTop.style.width = "0";
    closeClick.style.display = "none";
    openClick.style.display = "block";

    panelText1.style.display = "none";
  }


//SIDE PANEL 2
const sidePanelMiddle = document.getElementById("sidepanel-middle");
const openClick2 = document.getElementById("openButton-middle");
const closeClick2 = document.getElementById("closeButton-middle");

const panelText2 = document.getElementById("panel-text2");
  
openClick2.addEventListener("click", openNav2);
closeClick2.addEventListener("click", closeNav2);
  
  function openNav2() {
    sidePanelMiddle.style.width = "60%";
    closeClick2.style.display = "block";
    openClick2.style.display = "none";

    setTimeout(function(){
      panelText2.style.display = "block"}, 500);
  }
    
  function closeNav2() {
    sidePanelMiddle.style.width = "0";
    closeClick2.style.display = "none";
    openClick2.style.display = "block";

    panelText2.style.display = "none";
  }


//SIDE PANEL 3
  const sidePanelBottom = document.getElementById("sidepanel-bottom");
  const openClick3 = document.getElementById("openButton-bottom");
  const closeClick3 = document.getElementById("closeButton-bottom");

  const panelText3 = document.getElementById("panel-text3");
  
  openClick3.addEventListener("click", openNav3);
  closeClick3.addEventListener("click", closeNav3);
  
    function openNav3() {
      sidePanelBottom.style.width = "60%";
      closeClick3.style.display = "block";
      openClick3.style.display = "none";

      setTimeout(function(){
        panelText3.style.display = "block"}, 500);
    }
    
    function closeNav3() {
      sidePanelBottom.style.width = "0";
      closeClick3.style.display = "none";
      openClick3.style.display = "block";

      panelText3.style.display = "none";
    }



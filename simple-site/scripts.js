//SIDE PANEL 1
const sidePanelTop = document.getElementById("sidepanel-top");
const openClick = document.getElementById("openButton-top");
const closeClick = document.getElementById("closeButton-top");

openClick.addEventListener("click", openNav);
closeClick.addEventListener("click", closeNav);

  function openNav() {
    // sidePanelTop.style.transition = "width 1s"; (option)
    sidePanelTop.style.width = "60%";
    closeClick.style.display = "block";
    openClick.style.display = "none";
  }
  
  function closeNav() {
    sidePanelTop.style.width = "0";
    closeClick.style.display = "none";
    openClick.style.display = "block";
  }


//SIDE PANEL 2
const sidePanelMiddle = document.getElementById("sidepanel-middle");
const openClick2 = document.getElementById("openButton-middle");
const closeClick2 = document.getElementById("closeButton-middle");
  
openClick2.addEventListener("click", openNav2);
closeClick2.addEventListener("click", closeNav2);
  
  function openNav2() {
    // sidePanelTop.style.transition = "width 1s"; (option)
    sidePanelMiddle.style.width = "60%";
    closeClick2.style.display = "block";
    openClick2.style.display = "none";
  }
    
  function closeNav2() {
    sidePanelMiddle.style.width = "0";
    closeClick2.style.display = "none";
    openClick2.style.display = "block";
  }


//SIDE PANEL 3
  const sidePanelBottom = document.getElementById("sidepanel-bottom");
  const openClick3 = document.getElementById("openButton-bottom");
  const closeClick3 = document.getElementById("closeButton-bottom");
  
  openClick3.addEventListener("click", openNav3);
  closeClick3.addEventListener("click", closeNav3);
  
    function openNav3() {
      // sidePanelTop.style.transition = "width 1s"; (option)
      sidePanelBottom.style.width = "60%";
      closeClick3.style.display = "block";
      openClick3.style.display = "none";
    }
    
    function closeNav3() {
      sidePanelBottom.style.width = "0";
      closeClick3.style.display = "none";
      openClick3.style.display = "block";
    }

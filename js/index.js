const navItems = document.querySelectorAll('.nav-link'); //mouse over nav items and change color to green.
navItems.forEach((elem) => { 
    elem.addEventListener('mouseover', function (event) {
    event.target.style.color = 'lightgreen';

    setTimeout(function() { //timeout that changes the color back to black after one second.
       event.target.style.color = "black";
    }, 1000);
    })
});

window.addEventListener('load', function (event){ //window listener for page load and creates alert.
    alert("Page Loaded")
  });

  const navHeader = document.querySelector(".main-navigation"); //nav header background color changes when scrolling down
  window.addEventListener('wheel', function(event){
    navHeader.style.backgroundColor= 'lightblue';
  })
  
window.addEventListener('dblclick', event => { //window listener that auto takes the page up on double click.
    scrollToTop();
});
    function scrollToTop() { 
        window.scrollTo(0, 0); 
    }

document.addEventListener('keydown', logKey);
function logKey(e) {
  alert(` ${e.code}`);
}

const popAllH2 = document.querySelectorAll('h2');
popAllH2.forEach((element) => {
    element.addEventListener('focus', function (event){
        event.target.style.fontsize = '3rem';
    }, true);
})

const bodyScroll = document.querySelector("body"); // change background color
const images = document.querySelectorAll(".img-content");
images[0].addEventListener('dblclick', function(event){
    bodyScroll.style.backgroundColor= "salmon";  
  });
  images[1].addEventListener('dblclick', function(event){
    bodyScroll.style.backgroundColor= "salmon";  
  });
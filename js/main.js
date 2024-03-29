// Header Scroll
let nav = document.querySelector(".navbar");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 200) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// See more button 
$(document).ready(function(){
  $(".read").click(function(){
    $(this).prev().toggle();
    $(this).siblings('.dots').toggle();
    if($(this).text()=='SEE LESS'){
      $(this).text('SEE MORE');
    }
    else{
      $(this).text('SEE LESS');
    }
  });
});

// Mouse effect

const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);


function getAngle(diffX, diffY) {
  return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(
    Math.pow(diffX, 2) + Math.pow(diffY, 2)
  );
  const maxSqueeze = 0.15;
  const accelerator = 1500;
  return Math.min(distance / accelerator, maxSqueeze);
}


const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);
  
  pos.x += diffX * speed;
  pos.y += diffY * speed;
  
  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);
  
  const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
  const rotate = 'rotate(' + angle +'deg)';
  const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);



const cursorModifiers = document.querySelectorAll('[cursor-class]');

cursorModifiers.forEach(curosrModifier => {
  curosrModifier.addEventListener('mouseenter', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.add(className);
  });
  
  curosrModifier.addEventListener('mouseleave', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.remove(className);
  });
});


// popup 
    $(document).ready(function ()
{
    //Fade in delay for the background overlay (control timing here)
    $("#bkgOverlay").delay(4800).fadeIn(400);
  //Fade in delay for the popup (control timing here)
    $("#delayedPopup").delay(5000).fadeIn(400);
    
    //Hide dialouge and background when the user clicks the close button
    $("#btnClose").click(function (e)
    {
        HideDialog();
        e.preventDefault();
    });
});
//Controls how the modal popup is closed with the close button
function HideDialog()
{
    $("#bkgOverlay").fadeOut(400);
    $("#delayedPopup").fadeOut(300);
}

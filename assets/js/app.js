const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);
const menuBottomBar = $$("#bottom-bar");
const menuMobileBtn = $$(".bottom-bar__mobile");
const menuMobile = $$('.bottom-bar__list')
$(document).ready(function() {
  // When the button is clicked
  $('#video-btn').click(function() {
    // Show the modal
    $('#video-modal').fadeIn();
  });

  // When the close button is clicked
  $('.close').click(function() {
    // Hide the modal
    $('#video-modal').fadeOut();
    // Pause the video
    $('iframe').attr('src', $('iframe').attr('src'));
  });

  // When the user clicks outside of the modal
  $(window).click(function(e) {
    if ($(e.target).is('#video-modal')) {
      // Hide the modal
      $('#video-modal').fadeOut();
      // Pause the video
      $('iframe').attr('src', $('iframe').attr('src'));
    }
  });
});

var acc = document.getElementsByClassName("faq__accordion-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
     
    } else {
  
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
// slide 

//tab product
const tabs = $$$(".tab-item");
const panes = $$$(".tab-pane");
const tabActive = $$(".tab-item.active");

tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    $$(".tab-item.active").classList.remove("active");
    $$(".tab-pane.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  };
});

// gallery thumb 
function choiceImg(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
   expandImg.alt = imgs.src;
}


 //rating star
function startRating(item){
  var count = 0;
	count=item.id[0];
	sessionStorage.star = count;
	for(var i=0;i<5;i++){
		if(i < count){
			document.getElementById((i+1)).style.color="yellow";
      document.getElementById((i+1)).classList.remove("bi-star");
      document.getElementById((i+1)).classList.add("bi-star-fill");
      
		}
		else{
			document.getElementById((i+1)).style.color="black";
      document.getElementById((i+1)).classList.remove("bi-star-fill");
      document.getElementById((i+1)).classList.add("bi-star");
		}
	}
}
// count characters length
function CountCharacters(character){
const characterLength = $$(".characters")
 var char = 1500 - character.length;
characterLength.innerHTML = '('+char+ ')'
}

const toggleComment = $$(".product-reviews__summary-comment")
const toggleProductReview = $$(".product-reviews__content-form")
toggleComment.onclick =() =>{
  toggleProductReview.classList.toggle("open")
}

// mô tả product

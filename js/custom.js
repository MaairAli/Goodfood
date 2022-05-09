$(function () {

  //formvalidation
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
  
  
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})



$(document).ready(function () {
  $("#open-nav").click(function (e) {
    e.stopPropagation();
    $('.overlay').addClass('active');
  });

  $('.overlay').click(function (e) {
    $('.overlay').removeClass('active');
    $('.offcanvas-collapse').removeClass('open')
    $('.mobile-section').removeClass('active')
  });

  $("#show-menu").click(function (e) {
    e.stopPropagation();
    $('.mobile-section').addClass('active');
    $('.overlay').addClass('active');
  });


  $("#close-menu").click(function (e) {
    $('.overlay').removeClass('active');
    $('.mobile-section').removeClass('active')
  });

  
  $("#shcolarship-list").click(function (e) {
    $('.btn-list-view').addClass('active');
    $('.btn-grid-view').removeClass('active')
  });

  $("#shcolarship-grid").click(function (e) {
    $('.btn-grid-view').addClass('active');
    $('.btn-list-view').removeClass('active')
  });

  $("#search-content").click(function (e) {
    $('#landingsearch').addClass('active');
    $('.landing-overlay').addClass('active');
  });
  $("#close-search").click(function (e) {
    $('#landingsearch').removeClass('active');
    $('.landing-overlay').removeClass('active');
  });

  $("#youtubePlayer").click(function (e) {
    $('.player').toggleClass('active');
    $('.youtube-player').toggleClass('active');
  });
//faq-icon
  $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".icon-add").removeClass(".icon-add").addClass("icon-cross1");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".icon-cross1").removeClass("icon-cross1").addClass("icon-add");
    });
  //modalbox
  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') 
  })
//
//loadbutton
    const elementList = $(".listing .list-element")
    let currentItems = 0
	$("#loadmore").on("click",function(){
  for (let i = currentItems; i < currentItems + 1; i++){
    if (elementList[i]) {
     elementList[i].style.display = 'flex';
      }
  }
  currentItems += 1;
		if($(".list-element:hidden").length ==0)
		{
			$("#loadmore").fadeOut(); 
		}
	})

//Pagination
pageSize = 4;

showPage = function(page) {
    $(".line-content").hide();
    $(".line-content").each(function(n) {
        if (n >= pageSize * (page - 1) && n < pageSize * page)
            $(this).show();
    });        
}
  
showPage(1);

$("#pagin li a").click(function() {
    $("#pagin li a").removeClass("active-pagination");
    $(this).addClass("active-pagination");
    showPage(parseInt($(this).text())) 
});

  //slick
  $('.single-item').slick({
    dots: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false
        }
      }
    ]
  });
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          dots: true,
        }
      }
    ]
  });
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  });
  $('.autoplay-bottom').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: '60px',
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.autoplay-top').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: '25px',
    autoplaySpeed: 2000,
    arrows: false,
  });
 
});

$('.bottom-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  arrows: false,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// List View
function listView() {

  $(".card-info-container").addClass('list-view-display').removeClass('grid-view-display');
}

// Grid View
function gridView() {
  $(".card-info-container").addClass('grid-view-display').removeClass('list-view-display');
}


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


//rtl
window.addEventListener('load', function() {
  var langSelect = document.getElementById('lang');
  langSelect.addEventListener('change', function(event) {
    var value = event.target.value;
    localStorage.setItem('lang', value);
    setLanguage(value, 'rtl');
  });
  var lang = localStorage.getItem('lang') || 'en';
  langSelect.value = lang;
  setLanguage(lang, 'rtl');
});

var setLanguage = function(lang, dir) {
  var htmlTag = document.querySelector('html');
  htmlTag.setAttribute('lang', lang);
  if(dir && lang === 'ur') {
    htmlTag.setAttribute('dir', dir);
    addCss('css/bootstrap-rtl.css');
  } else {
    htmlTag.removeAttribute('dir');
    removeCss('css/bootstrap-rtl.css');
  }
}

var addCss = function(fileName) {
  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}

var removeCss = function(fileName) {
  var link = document.querySelector('link[href$="'+fileName+'"]');
  if(link) {
    link.remove();
  }
}
//landing search autocomplete
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

var content = ["Degree Attestation","Associate Degree Program","Equivalence Certificate","PM Laptop Scheme","Scholarships","Services"];
autocomplete(document.getElementById("myInput"), content);
//clear
function clearText() {
  document.getElementById('myInput').value = '';
}
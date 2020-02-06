$(document).ready(function () {

    // btn-goup
    //show btn when user scroll more than 100px
    $(document).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".btn-go-up").removeClass('d-none');


        } else {
            $(".btn-go-up").addClass('d-none');

        }
    });

    //detect weather page is scrolling 

    //scroll up
    $(".btn-go-up").on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    // performance
   
    
    // dynamic load nav-bar jquery
    let nav = '<div class="nav-area"><nav class="navbar navbar-expand-lg navbar-light"><a class="nav-brand" href="index.html"><img src="images/healthfood_logo1.png" alt="healthyfood_logo" /></a><div class="container"><button class="navbar-toggler" type="button" data-toggle="collapse"data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item active p-2"><a class="nav-link text-grey font-weight-bold" href="#">Home <spanclass="sr-only"></span></a></li><li class="nav-item p-2"><a class="nav-link text-white font-weight-bold nav-sale" href="#">Sale</a></li><li class="nav-item dropdown p-2"><a class="nav-link dropdown-toggle text-white font-weight-bold" href="#"id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"aria-expanded="false">Products</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item nav-vegetable" href="#">Organic vegetable</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#">Diet Recipe</a><div class="dropdown-divider"></div><a class="dropdown-item nav-drink" href="#">Sport Drink</a></div></li><li class="nav-item p-2"><a class="nav-link nav-AboutUs" href="#">about us</a></li></ul><form class="form-inline my-2 my-lg-0"><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></form></div></div></nav></div>';

  

    // $('.health-food').html(nav);
    //Javascript
    let healthFood = document.getElementById("health-food");
    healthFood.insertAdjacentHTML("afterbegin", nav);
    console.log($(".sale-container").offset());

  
  //create product box
  let producut_box='<div class="col-sm-6 col-md-4 col-lg-3 mb-3"><!-- Product--><article class="product wow fadeInRight"><div class="product-body"><div class="product-figure"><img src="images/Berries.png" alt="" width="148" height="128" /></div><h5 class="product-title"><a href="#">berry</a></h5><div class="product-price-wrap"><div class="product-price product-price-old">$30.00</div><div class="product-price">$17.00</div></div></div><span class="product-badge product-badge-sale">Sale</span><div class="product-button-wrap d-none"><div class="product-button"><aclass="button button-gray-14 button-zakaria fl-bigmug-line-search74" href="#"></a></div><div class="product-button"><aclass="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"href="#"></a></div></div></article></div>';
  
 
  for (var i=0; i<8; i++){
     $(".product-container").append(producut_box);
     console.log("testaaaaa");
   }
   

  
    //click navbar scroll to certain secction 
    //sale

    $(".nav-sale").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $(".sale-container").offset().top
        }, 5000);

    });

    // about us
    $(".nav-AboutUs").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $(".about-us-contaier").offset().top
        }, 5000);

    });
    //product
    $(".nav-vegetable").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $(".product-container").offset().top
        }, 5000, console.log("product scroll down"));

    });

//hide nav when you do not scroll in 3s.
    let timer = null;
    window.addEventListener('scroll', function () {
        if (timer !== null) {
            clearTimeout(timer);
            $(".nav-area").removeClass('d-none');
            
        }
        timer = setTimeout(function () {
            $(".nav-area").addClass('d-none');
            console.log("if you donot scroll in 3s navbar will dispear");
        
            
        }, 3000);
    }, false);


    let t0 = performance.now();
    console.log(`running time is：${t0}`);

});



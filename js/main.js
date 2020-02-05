
$(document).ready(function(){
// btn-goup

//show btn when user scroll more than 100px
  $(document).scroll(function(){
      if($(window).scrollTop()>100){
          $(".btn-go-up").removeClass('d-none');
          console.log("test1");

      }else{
        $(".btn-go-up").addClass('d-none');
        console.log("test2");
      }
  });

  //scroll up
  $(".btn-go-up").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });


// dynamic load nav-bar jquery
let nav='<div class="nav-area"><nav class="navbar navbar-expand-lg navbar-light"><a class="nav-brand" href="index.html"><img src="images/healthfood_logo1.png" alt="healthyfood_logo" /></a><div class="container"><button class="navbar-toggler" type="button" data-toggle="collapse"data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item active p-2"><a class="nav-link text-grey font-weight-bold" href="#">Home <spanclass="sr-only">(current)</span></a></li><li class="nav-item p-2"><a class="nav-link text-white font-weight-bold" href="#">Sale</a></li><li class="nav-item dropdown p-2"><a class="nav-link dropdown-toggle text-white font-weight-bold" href="#"id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"aria-expanded="false">Products</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="#">Organic vegetable</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#">Diet Recipe</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#">Sport Drink</a></div></li><li class="nav-item p-2"><a class="nav-link" href="#">about us</a></li></ul><form class="form-inline my-2 my-lg-0"><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></form></div></div></nav></div>';
$('.health-food').html(nav);

//Javascript
let healthFood=document.getElementsByClassName("health-food");
let healthFood1=document.getElementById("1");
console.log(healthFood1);





});
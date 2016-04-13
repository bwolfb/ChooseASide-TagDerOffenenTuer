$(document).ready(function () {
  var resizeTimer;
  $(window).on('resize', function(e) {
    $("#darkside,#lightside,#darkside_title,#lightside_title").css("transition-duration","0s");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      $("#darkside,#lightside,#darkside_title,#lightside_title").css("transition-duration","0.5s");
    }, 250);
  });

  $('#lightside_title').on({
    mouseover: function(){
      $("#darksidebackground").insertBefore("#lightsidebackground");
      $("#lightside").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%, 0 100vh)");
      $("#lightsidebackground").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%, 0 100vh)");
    },
    mouseleave: function(){
      $("#lightside").css("-webkit-clip-path","polygon(65% 0, 100% 0, 100% 100%, 35% 100vh)");
      $("#lightsidebackground").css("-webkit-clip-path","polygon(65% 0, 100% 0, 100% 100%, 35% 100vh)");
    },
    click: function(){
      $("#lightside_title").css("margin-top","30vh");
      $("#lightside_title").css("margin-left","40vw");
      $("#lightside").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%, 0 100vh)");
      $("#lightsidebackground").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%, 0 100vh)");
      $("#lightside").css("background-image","none");
      $("#lightside_title").off('mouseleave');
      // $( ".container" ).append( $( "bild1" ) );
      $("buttonwrapper").append("<button class=\"lightside_button\"><span>Back To Home</span></button>");
    }
  });

  $('#darkside_title').on({
    mouseover: function(){
      $("#lightsidebackground").insertBefore("#darksidebackground");
      $("#darkside").css("-webkit-clip-path","polygon(100% 0, 0 0, 0 100%, 100% 100vh)");
      $("#darksidebackground").css("-webkit-clip-path","polygon(100% 0, 0 0, 0 100%, 100% 100vh)");
    },
    mouseleave: function(){
      $("#darkside").css("-webkit-clip-path","polygon(65% 0, 0 0, 0 100%, 35% 100vh)");
      $("#darksidebackground").css("-webkit-clip-path","polygon(65% 0, 0 0, 0 100%, 35% 100vh)");
    },
    click: function(){
      $("#darkside_title").css("margin-top","30vh");
      $("#darkside_title").css("margin-left","40vw");
      $("#darkside").css("-webkit-clip-path","polygon(100% 0, 0 0, 0 100%, 100% 100vh)");
      $("#darksidebackground").css("-webkit-clip-path","polygon(100% 0, 0 0, 0 100%, 100% 100vh)");
      $("#darkside").css("background-image","none");
      $("#darkside_title").off('mouseleave');
      $("buttonwrapper").add($.parseHTML("<button class=\"darkside_button\"><span>Back To Home</span></button>"));
    }
  });
});

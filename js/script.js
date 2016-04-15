$(document).ready(function () {
  var resizeTimer;
  var onDarkside = false;
  var onLightside = false;
  $(window).on('resize', function(e) {
    $("#darkside,#lightside,#darkside_title,#lightside_title,#darksidebackground,#lightsidebackground").css("transition-duration","0s");
    if (onLightside) {
      $("#bluelightsaber").css("height","70vw");
      $("#bluelightsabercontainer").css("height","70vw");
    }
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      $("#darkside,#lightside,#darkside_title,#lightside_title,#darksidebackground,#lightsidebackground").css("transition-duration","0.7s");
    }, 250);
  });

  $('#lightside_title').on({
    mouseover: function(){
      if (!onLightside) {
        $("#darksidebackground").insertBefore("#lightsidebackground");
        $("#lightsideperson").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%, 0 100%)");
        $("#lightsidebackground").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%, 0 100%)");
      }
    },
    mouseleave: function(){
      if (!onLightside) {
        $("#lightsideperson").css("-webkit-clip-path","polygon(65% 0, 100% 0, 100% 100%, 35% 100%)");
        $("#lightsidebackground").css("-webkit-clip-path","polygon(65% 0, 100% 0, 100% 100%, 35% 100%)");
      }
    },
    click: function(){
      if (!onLightside) {
        $("#lightsideperson").css("background-image","none");
        $("#goodboylightsaber").css("transform-origin","bottom right");
        $("#goodboylightsaber").css("transform","rotate(-90deg)");
        $("#goodboylightsaber").css("bottom","26%");
        $("#goodboylightsaber").css("right","6%");
        $("#bluelightsaber").css("width","186px");
        $("#bluelightsaber").css("height","70vw");
        $("#bluelightsaber").css("bottom","-1350px");
        $("#bluelightsabercontainer").css("height","70vw");
        setTimeout(function() {
          $("#goodboylightsaber").appendTo("footer");
          $("#goodboylightsaber").css("bottom","89%");
          $("#lightside_button").slideDown(400);
        },1000);
        $("#lightside_title").css("margin-top","-1vh");
        $("#lightside_title").css("margin-left","40vw");
        $("#lightsideperson").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%, 0 100%)");
        $("#lightsidebackground").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%, 0 100%)");
        $("#lightside").prepend($("<button id=\"lightside_button\"><span>Back </span></button>"));
        $("#lightsidepic").slideDown(800);

        $("#lightside_button").click(function() {
          $("#lightsidepic").slideUp(800);
          setTimeout(function() {
          $("#lightside_title").css("margin-top","20vh");
          $("#lightside_title").css("margin-left","68vw");
          $("#lightsidebackground").css("-webkit-clip-path","polygon(65% 0, 100% 0, 100% 100%, 35% 100%)");
          $("#lightsideperson").css("-webkit-clip-path","polygon(65% 0, 100% 0, 100% 100%, 35% 100%)");
        },800);
          $("#lightside_button").slideUp(400);
          setTimeout(function() {
            $("#lightside_button").remove();
          }, 400);
          onLightside = false;
          $("#goodboylightsaber").css("transform","initial");
          $("#bluelightsaber").css("height","auto");
          $("#bluelightsaber").css("width","auto");
          $("#goodboylightsaber").css("bottom","-15vh");
          $("#goodboylightsaber").css("right","0");
          setTimeout(function() {
            $("#goodboylightsaber").appendTo("#lightside");
            $("#goodboylightsaber").css("bottom","0");
            $("#lightsideperson").css("background-image","url(\"img/FighterObiHead.png\")");
          },1000);
        });
        $("#lightside").css("background-image","none");
        onLightside = true;
      }
    }
  });

  $("#darkside").mouseover(function() {
    if (!onDarkside) {
      $("#redlightsaber").css({bottom:0});
      $("#saberfire").css({bottom:0})
    }
  });

  $("#darkside").mouseleave(function() {
    if (!onLightside) {
      $("#saberfire").css({bottom:-1000})
      $("#redlightsaber").css({bottom:-1000});
    }
  });

  $("#lightside").mouseover(function() {
    if (!onLightside) {
      $("#bluelightsaber").css({bottom:0});
    }
  });

  $("#lightside").mouseleave(function() {
    if (!onLightside) {
      $("#bluelightsaber").css({bottom:-1000})
    }
  });

  $("footer").mouseover(function() {
    if (onLightside) {
      $("#bluelightsaber").css({bottom:0});
    } else if (onDarkside) {
      $("#redlightsaber").css({bottom:0});
      $("#saberfire").css({bottom:0});
    }
  });

  $("footer").mouseleave(function() {
    if (onLightside) {
      $("#bluelightsaber").css({bottom:-1350});
    } else if (onDarkside) {
      $("#redlightsaber").css({bottom:-1350});
      $("#saberfire").css({bottom:-1350});
    }
  });

  $('#darkside_title').on({
    mouseover: function(){
      if (!onDarkside) {
        $("#lightsidebackground").insertBefore("#darksidebackground");
        $("#darkside").css("-webkit-clip-path","polygon(100% 0, 0 0, 0 100%, 100% 100%)");
        $("#darksidebackground").css("-webkit-clip-path","polygon(100% 0, 0 0, 0 100%, 100% 100%)");
      }
    },
    mouseleave: function(){
      if (!onDarkside) {
        $("#darkside").css("-webkit-clip-path","polygon(65% 0, 0 0, 0 100%, 35% 100%)");
        $("#darksidebackground").css("-webkit-clip-path","polygon(65% 0, 0 0, 0 100%, 35% 100%)");
      }
    },
    click: function(){
      if (!onDarkside) {
        $("#darkside").css("background-image","none");
        $("#badboylightsaber").css("transform-origin","bottom right");
        $("#badboylightsaber").css("transform","rotate(90deg)");
        $("#badboylightsaber").css("bottom","24.5%");
        $("#badboylightsaber").css("left","-4.25%");
        $("#redlightsaber").css("width","186px");
        $("#redlightsaber").css("height","70vw");
        $("#redlightsaber").css("bottom","-1350px");
        $("#saberfire").css("width","186px");
        $("#saberfire").css("height","70vw");
        $("#saberfire").css("bottom","-1350px");
        $("#redlightsabercontainer").css("height","70vw");
        setTimeout(function() {
          $("#badboylightsaber").appendTo("footer");
          $("#badboylightsaber").css("bottom","76%");
          $("#darkside_button").slideDown(400);
        },1000);
        $("#darkside_title").css("margin-top","-1vh");
        $("#darkside_title").css("margin-left","40vw");
        $("#darkside").css("-webkit-clip-path","polygon(100% 0, 0 0, 0 100%, 100% 100%)");
        $("#darksidebackground").css("-webkit-clip-path","polygon(100% 0, 0 0, 0 100%, 100% 100%)");
        $("#darkside").prepend($("<button id=\"darkside_button\"><span>Back </span></button>"));
        $("#darksidepic").css("diplay","block")
        $("#darksidepic").slideDown(800);

        $("#darkside_button").click(function() {
          $("#darksidepic").slideUp(800);
          setTimeout(function() {
            $("#darkside_title").css("margin-top","20vh");
            $("#darkside_title").css("margin-left","5vw");
            $("#darkside").css("-webkit-clip-path","polygon(65% 0, 0 0, 0 100%, 35% 100%)");
            $("#darksidebackground").css("-webkit-clip-path","polygon(65% 0, 0 0, 0 100%, 35% 100%)");
          },800);
          $("#darkside_button").slideUp(400);
          setTimeout(function() {
            $("#darkside_button").remove();
          }, 400);
          onDarkside = false;
          $("#badboylightsaber").css("transform","initial");
          $("#redlightsaber").css("height","auto");
          $("#redlightsaber").css("width","auto");
          $("#saberfire").css("height","auto");
          $("#saberfire").css("width","auto");
          $("#badboylightsaber").css("bottom","-15vh");
          $("#badboylightsaber").css("left","0");
          setTimeout(function() {
            $("#badboylightsaber").appendTo("#darkside");
            $("#badboylightsaber").css("bottom","0");
            $("#darkside").css("background-image","url(\"img/imperator.png\")");
          }, 1000);
        });
        $("#darkside").css("background-image","none");
        onDarkside = true;
      }
    }
  });
});

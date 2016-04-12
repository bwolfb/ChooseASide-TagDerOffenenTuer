$(document).ready(function () {
  $('#lightside_title').on({
    mouseover: function(){
      $("#darkside").insertBefore("#lightside");
      $("#lightside").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%, 0 100vh)");
    },
    mouseleave: function(){
      $("#lightside").css("-webkit-clip-path","polygon(65% 0, 100% 0, 100% 100%, 35% 100vh)")
    },
    click: function(){
      $("#lightside_title").css("margin-top","30vh");
      $("#lightside_title").css("margin-left","40vw");
      $("#lightside").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%, 0 100vh)");
      $("#lightside_title").off('mouseleave');
    }
  });

  $('#darkside_title').on({
    mouseover: function(){
      $("#lightside").insertBefore("#darkside");
      $("#darkside").css("-webkit-clip-path","polygon(100% 0, 0 0, 0 100%, 100% 100vh)");
    },
    mouseleave: function(){
      $("#darkside").css("-webkit-clip-path","polygon(65% 0, 0 0, 0 100%, 35% 100vh)")
    },
    click: function(){
      $("#lightside").insertBefore("#darkside");
      $("#darkside_title").css("margin-top","30vh");
      $("#darkside_title").css("margin-left","40vw");
      $("#darkside").css("-webkit-clip-path","polygon(100% 0, 0 0, 0 100%, 100% 100vh)");
      $("#darkside_title").off('mouseleave');
    }
  });
});

// index.html에서 사용
$(document).ready(function(){
  var i=1;
  setInterval(function(){
    i++;
    if(i>3){ i=1; }
    $("#main-image").fadeOut("slow");
    $("#main-image").attr("src", "png/main" + i + ".jpg");
    $("#main-image").fadeIn("slow");
  }, 3000);
});

setInterval(function(){
	$('.dog_run').css({'background-position' : '-=7'});
  // background-position을 -7씩 계속 함으로서 왼쪽으로 이동하는 것 처럼 보임
}, 20);
// setInterval : 반복 주기 지정

///////////////////////////////////////////////////////////////////

// introduce.html, attraction.html에서 사용
$("#para-title1").click(function(){
  $("#paragraph1").slideToggle(1000);
});
$("#para-title2").click(function(){
  $("#paragraph2").slideToggle(1000);
});
$("#para-title3").click(function(){
  $("#paragraph3").slideToggle(1000);
});
$("#para-title4").click(function(){
  $("#paragraph4").slideToggle(1000);
});
$("#para-title5").click(function(){
  $("#paragraph5").slideToggle(1000);
});
$("#para-title6").click(function(){
  $("#paragraph6").slideToggle(1000);
});

///////////////////////////////////////////////////////////////////

// introduce.html에서 사용
$('#change-money').click(function(){
  $('#kota').val(($('#korea').val()*(0.0038)).toFixed(4))
});
///////////////////////////////////////////////////////////////////
//tip.html에서 사용
scroll_right(function(){
  $('.tips_picture').scrollRight($('.tips_picture').scrollRight() + 50);
});

scroll_left(function(){
  $('.tips_picture').scrollLeft($('.tips_picture').scrollLeft() + 50);
});

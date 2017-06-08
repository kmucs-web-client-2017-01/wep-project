$('input').focus(function(){
  $(this).next('span').removeAttr('hidden');
});

$('input').blur(function(){
  $(this).next('span').attr('hidden', 'hidden');
});

$('#submit').click(function(){
  var var_1 = $('#ID').val();
  var var_2 = $('#PW').val();

  if(var_1!="" && var_2!=""){
    var info = confirm(var_1+"님 입력하신 정보가 정확합니까?");
    if(info==true){
      alert($('#ID').val() + " 님 로그인되셨습니다!");
      document.getElementById("login").reset()
    }
    else {
      alert("다시 입력해주세요.");
    }
  }
  else {
    alert("ID, PW양식을 꽉 채워주세요.");
  }
});

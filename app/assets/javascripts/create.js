$(function(){
  $(".form__message").on("keyup",function(){
    var input = $("form__message").val();
    console.log(this)
  });
});

$(document).ready(function(){
    $("#navside1").hide();
    $("#a01").click(function(){
      $("#navside1").fadeToggle();
    })
});

/*================FAQ=============*/
// toggle +
$(function(){
  $("#testQuestion, #testQuestion2,#testQuestion3,#testQuestion4,#testQuestion5").click(function(){
    $(this).find('i').toggleClass('fa fa-plus').css("color","#33ccff");
    $(this).find('i').toggleClass('fa fa-minus').css("color","#33ccff");
    });
    });

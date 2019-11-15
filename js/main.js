
  
  //feedback form 

  $("#contact").submit(function(event) {
    event.preventDefault();
    var blanks = ["name", "email", "message"];
    var input = [];
    blanks.forEach(function(blank) {
      input.push($("#" + blank).val());
    });
    alert(
      "Thank you for reaching out to us. Your message has been received."
    );
    $("#contact")[0].reset();
  });
  
  //dark mode

  $( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark-mode" )) {
      $( "body" ).removeClass( "dark-mode" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark-mode" );
      $( ".inner-switch" ).text( "ON" );
    }
});
// button details2

$(document).ready(function() {

$("#details").click(function() {
  $(".details1").show();
});
$("#details2").click(function() {
  $(".details2").show();
});
$("#details3").click(function() {
  $(".details3").show();
});
});
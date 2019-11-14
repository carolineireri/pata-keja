
  
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

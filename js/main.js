
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

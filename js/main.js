
  //dark mode

  $(document).ready(function() {
    $("button#dark").click(function() {
      $("body").removeClass();
      $("body").addClass("dark-mode");
    });
  });
  
  $(document).ready(function() {
    $("button#light").click(function() {
      $("body").removeClass();
      $("body").addClass("day-mode");
    });
  });

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


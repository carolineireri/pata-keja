//feedback form

$("#contact").submit(function(event) {
  event.preventDefault();
  var blanks = ["name", "email", "message"];
  var input = [];
  blanks.forEach(function(blank) {
    input.push($("#" + blank).val());
  });
  alert("Thank you for reaching out to us. Your message has been received.");
  $("#contact")[0].reset();
});

//dark mode

$(".inner-switch").on("click", function() {
  if ($("body").hasClass("dark-mode")) {
    $("body").removeClass("dark-mode");
    $(".inner-switch").text("OFF");
  } else {
    $("body").addClass("dark-mode");
    $(".inner-switch").text("ON");
  }
});

//Book site view
$("document").ready(function() {
  $(".book-site").click(function() {
    var name = prompt("PLease enter your name");
    if (name) {
      var mobile = prompt("Please enter your mobile number");
      if (mobile) {
        alert(
          "Thank you for contacting Pata Keja. We will get back to you soon."
        );
      }
    }
  });
});

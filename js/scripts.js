$(document).ready(function() {
  $(".survey").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var telInput = $("input#tel").val();
    var dateInput = $("#date").val();
    var icingInput = $("input#icing").val();
    var colorInput = $("#color").val();
    var imageInput = $("input#image").val();
    var cakeInput = $("input:radio[name=typed]:checked").val();
    var fillingInput = $("input:radio[name=flavor]:checked").val();

      $(".name").text(nameInput);
      $(".person2").text(emailInput);
      $(".animal").text(telInput);
      $(".exclamation").text(dateInput);
      $(".verb").text(icingInput);
      $(".noun").text(colorInput);
      $(".exclamation").text(imageInput);
      $(".verb").text(cakeInput);
      $(".noun").text(fillingInput);

      $("#complete-order").show();

      console.log();


    });
  });

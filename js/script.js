$(document).ready(function(){
  $('#infoForm').submit(function(event){
    var nameInput = $('input#name').val();
    var phoneInput = $('input#phoneNumber').val();
    var emailInput = $('input#eMail').val();
    var timeInput = $('input#appTime').val();

    $('.name').text(nameInput);
    $('.phoneNumber').text(phoneInput);
    $('.eMail').text(emailInput);
    $('.appTime').text(timeInput);

    $('#conformation').open(a.href);
    event.preventDefault();
  });
});

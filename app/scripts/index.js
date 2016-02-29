var $ = require('jquery');

$('#submit').on('click',function(event){
  event.preventDefault();
  var form =  $('#form').serialize();
  $.post('https://docs.google.com/forms/d/1LgvtgbQXaayYVLiUT238_gc1I3YBu-vvyman4woPLGk/formResponse', form, function(){
    // write function here that will happen when post is posted succesfully
    // geting issue on request header, ask dan 
  });
})

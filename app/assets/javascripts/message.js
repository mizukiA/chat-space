$(function(){
function buildHTML(message){
  Image = (message.image)?'<img class="lower-message__image" src="${message.image_url}">';"";    
  }
  var html =
      `<div class="message" data-message-id=${message.id}>
         <div class="upper-message">
           <div class="upper-message__user-name">
           ${message.user_name}
           </div>
           <div class="upper-message__date">
           ${message.date}
           </div>
         </div>
         </div>
       <div class="lower-message">
         <p class="lower-message__content">
         ${message.content}
         </p>
         ${insert.image}
       </div>
       </div>`
     return html;
   }
  $('#new_message').on('submit', function() {
    e.preventDefault();
    var formData = new FormData(this);
    var input = $('.form__message').val()
    var url = $(this).attr('action')
   $.ajax({
     url: url,
     type: 'POST',
     data: formData,
     dataType: 'json',
     processData: false,
     contentType: false
   })
     .done(function(data){
       var html = buildHTML(data);
       $('.messages').append(html);
       $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');  
       $('.form')[0].reset();
    })
    .fail(function(){
      alert('error');
  });
  return false;
 })
});
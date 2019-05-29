$(function(){
 function buildHTML(message){
  var image = (message.image)?'<img class="lower-message__image" src="${message.image_url}">':"";
  var html =
      `<div class="message" data-id=${message.id}>
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
         ${image}
       </div>
       </div>`
     return html;
    }
//   var buildMessageHTML = function(message) {
//     var html = 
//         `<div class="message" data-id=${message.id}>
//            <div class="upper-message">
//              <div class="upper-message__user-name">
//              ${message.user_name}
//              </div>
//              <div class="upper-message__date">
//              ${message.created_at}
//              </div>
//          </div>
//            <div class="lower-message">
//              <p class="lower-message__content">
//              ${message.content}
//              </p>
//              ${Image(image_url)}
//            </div>
//           </div>`
//      return html;
// };
  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    console.log(this)
    // var input = $('.form__message').val()
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
       $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
  });
  return false;
 });
  var reloadMessages = function() {
    last_message_id = $('.message:last').data('id');
    $.ajax({
      url: 'api/messages',
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
     .done(function(messages) {
       messages.forEach(function(message){
       var insertHTML = buildHTML(message)
       $('.messages').append(insertHTML);
       $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');  
     console.log('success');
      })
      })
     .fail(function() {
      alert('error');
    console.log('error');
       })
     };
     setInterval(reloadMessages, 5000)
 });
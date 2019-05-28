$(function() {
  
  var search_list = $("#user-search-result")
  var member_list = $(".chat-group-user__name")

  function appendUser(user) {
     var html = 
   `<div class = "chat-group-user clearfix">
    <p class = "chat-group-user__name">${user.name}</p>
    <div class = "user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name=${user.name}>追加
    </div>
   </div>`
   search_list.append(html);
  }

  function appendErr(user){
    var html = 
    `<li>
    <div class ='#user-search-field.chat-group-form__input'>${ user }</div>
    </li>`
    search_list.append(html);
  }

  function appendMember(name,user_id){
    var html = 
    `<div class ='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
      <input name ='group[user_ids][]' type ='hidden' value ='${user_id}'>
      <p class ='chat-group-user__name'>${name}</p>
      <div class ='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
    </div>`
    member_list.append(html);
  }

  $(function() {
    $("#user-search-field").on("keyup", function() {
      var input = $('#user-search-field').val();

      $.ajax({
        type: 'GET',
        url: '/users',
        data: {name: input },
        dataType: 'json'
      })

      .done(function(users) {
        search_list.empty();
        if (users.length !== 0) {
          users.forEach(function(user){
            appendUser(user);
          });
        }else {
          appendErr("一致するユーザーはいません");
        }
      })
      .fail(function() {
            alert('ユーザー検索に失敗しました');
      })
      $(function() {
        $(document).on('click', '.user-search-add',function() {
          var name = $(this).attr("data-user-name");
          var user_id = $(this).attr("data-user-id");
          appendMember(name,user_id);
        })
        $(document).on('click','.user-search-remove',function() {
          $(".chat-group-user__name").remove();
          appendMember(name,user_id);
        })
      });
    });
  });
});
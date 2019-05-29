# json.id @message.id
# json.user_name @message.user.user_name
# json.date @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
# json.content @message.content
# json.image @message.image_url

json.(@message, :content, :image)
json.date @message.created_at
json.user_name @message.user.name
#idもデータとして渡す
json.id @message.id
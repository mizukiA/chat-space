class Api::MessagesController < ApplicationController

  def index
    @group = Group.find(params[:group_id])
    respond_to do |format|
      format.html
      format.json{@new_messages = @group.messages.where('id > ?', params[:id])}
    end
  end
end
# private
#   def new_messages_params
#     params.require(:message).permit(:content, :image, :id).merge(user_id: user.id)
#   end

# {new_messages_params}
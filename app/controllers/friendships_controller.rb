class FriendshipsController < ApplicationController
  def index
  end

  def new
    @friendship = Friendship.new
    @friends = current_user.friends
  end

  def search
    @user = User.find_by(email: params[:email])
    render json: {response: @user }
  end

  def create
    friendee = User.find_by(user_params)
    @friendship = Friendship.new(friender: current_user, friendee: friendee)
    binding.pry
    if @friendship.save
      render json: {response: [friendee] }
    else
      @errors = "You're already friends with this person."
      redirect_to root_path
    end
  end

  private
  def user_params
    params.require(:email).permit(:email)
  end
end

class UserAddressesController < ApplicationController
  def create
    @address = UserAddress.new(user: current_user, address: params[:address])
    if @address.save
      render json: { response: [@address] }
    else
      @errors = "This address is already saved."
      redirect_to root_path
    end
  end
end

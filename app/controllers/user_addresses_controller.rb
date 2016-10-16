class UserAddressesController < ApplicationController
  def create
    address = UserAddress.create(user: current_user, address: params[:address])
    redirect_to root_path
  end

end

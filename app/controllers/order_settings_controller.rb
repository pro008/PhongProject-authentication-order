class OrderSettingsController < ApplicationController
  before_action :signed_in_user
  before_action :load_order, only: %i[update destroy show]

  def index
    if @current_user.is_admin
      order_settings = OrderSetting.all
      list_users = User.select(:id, :email)
    else
      order_settings = @current_user.order_settings
      list_users =[]
    end

    render json:{ orders: order_settings, list_users: list_users }
  end

  def show
    render json:{ order: @order }
  end

  def update
    @order.update(order_params)

    render json:{ order: @order }
  end

  def create
    @order = @current_user.order_settings.new(order_params)
  
    if (@order.save)
      render json:{ order: @order}
    else
      render json: {}, status:400
    end
  end

  def destroy
    @order.destroy

    render json:{ status: 200 }
  end

  private

  def load_order
    @order = OrderSetting.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:title, :description, :status)
  end
end
class AnimalsController < ApplicationController

  def tops
  end

  def index
  end

  def show
  end

  def new
    @animal = Animal.new
  end

  def details
  end

  def create
    # binding.pry
    # @animal = Animal.create!(create_params)
    # Animal.create!(create_params)
    # redirect_to action: 'index'
    @animal = Animal.new(create_params)
    @animal.save
    binding.pry
    redirect_to root_path
  end

  private
  def create_params
    params.permit(:name)
    # ,:age,:castration,:sex,:kind,:recruitment,:character,:condition,:delivery,:remarks)
    # .merge(user_id: current_user.id)
  end
end


# ,:facilitiy_id
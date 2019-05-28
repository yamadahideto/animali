class AnimalsController < ApplicationController

  def tops
  end

  def show
    binding.pry
  end

  def details
  end

  def create
    Tubuyaki.create(create_params)
    redirect_to action: 'index'
  end

  private
  def create_params
    params.permit(:name,:image,:text)
  end
end

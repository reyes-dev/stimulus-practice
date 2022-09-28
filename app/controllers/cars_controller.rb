class CarsController < ApplicationController
  def index
    @cars = Car.all
  end

  def new
    @car = Car.new
    @car.variants.build
  end

  def create
    @car = Car.create car_params
    redirect_to root_path
  end

  def show
  end

  private

  def car_params
    params.require(:car).permit(:name, variants_attributes: [:id, :body])
  end
end

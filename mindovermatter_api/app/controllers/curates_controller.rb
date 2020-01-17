class CuratesController < ApplicationController
  before_action :set_curate, only: [:show, :update, :destroy]

  # GET /curates
  def index
    @curates = Curate.all

    render json: @curates
  end

  # GET /curates/1
  def show
    render json: @curate
  end

  # POST /curates
  def create
    @curate = Curate.new(curate_params)

    if @curate.save
      render json: @curate, status: :created, location: @curate
    else
      render json: @curate.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /curates/1
  def update
    if @curate.update(curate_params)
      render json: @curate
    else
      render json: @curate.errors, status: :unprocessable_entity
    end
  end

  # DELETE /curates/1
  def destroy
    @curate.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_curate
      @curate = Curate.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def curate_params
      params.require(:curate).permit(:name, :email, :phone, :answer)
    end
end

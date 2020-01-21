class MerchesController < ApplicationController
  before_action :set_merch, only: [:show, :update, :destroy]

  # GET /merches
  def index
    @merches = Merch.all

    render json: @merches
  end

  # GET /merches/1
  def show
    render json: @merch
  end

  # POST /merches
  def create
    @merch = Merch.new(merch_params)

    if @merch.save
      render json: @merch, status: :created, location: @merch
    else
      render json: @merch.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /merches/1
  def update
    if @merch.update(merch_params)
      render json: @merch
    else
      render json: @merch.errors, status: :unprocessable_entity
    end
  end

  # DELETE /merches/1
  def destroy
    @merch.destroy
    render json: { status: 204 }

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_merch
      @merch = Merch.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def merch_params
      params.permit(:img_url, :title, :description, :link_to_merch)
    end
end

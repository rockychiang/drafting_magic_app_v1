class Api::V1::DraftsController < Api::V1::BaseController
  include DraftsHelper

  def create
    packs = generate_packs(draft_params[:block], draft_params[:format])
    respond_with packs, json: packs
  end

  private

  def draft_params
    params.require(:draft).permit(:block, :format)
  end
end

class Api::V1::DraftsController < Api::V1::BaseController

  def create
  end

  private

  def draft_params
    params.require(:draft).permit(:block, :format)
  end
end

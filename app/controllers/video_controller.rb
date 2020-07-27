class VideoController < ApplicationController
  before_action :autheticate
  def index
  end
  def autheticate
  if !session[:current_user_id]
  redirect_to root_path
  end
  end
end

class CourseController < ApplicationController
  before_action :autheticate , only: [:confirm]
  def index
   
  end
  def confirm
  end
  def autheticate
    
    if (!session[:current_user_id])
      redirect_to root_path
    end
    end
end

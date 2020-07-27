class MainController < ApplicationController
  before_action :autheticate
  def login
  end
  def oath_signup
  end
  def sign_up
  end
  def autheticate
    
    if (session[:current_user_id])
      redirect_to root_path
    end
    end
end

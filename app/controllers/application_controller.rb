class ApplicationController < ActionController::Base
    def signout
        reset_session
redirect_to root_path
    end
end

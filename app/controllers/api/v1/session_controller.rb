module Api 
	module V1 
        class SessionController< ApplicationController 
            skip_before_action :verify_authenticity_token
            def loginsession
                @id= params[:id]
                session[:current_user_id]=@id
                session[:current_user_email]=params[:email]
            end
            def checksession
            if(session[:current_user_id])
                return render json:{
                    uin: session[:current_user_id],
                    status: true,
                }
            else
                return render json:{
                   status:false,
                }
            end
        end
        end
    end
end
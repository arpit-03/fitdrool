module Api 
	module V1 
		class SessionController< ApplicationController 
            def loginsession
                @id= params[:id]
                puts @id
            end
        end
    end
end
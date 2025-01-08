# app/controllers/concerns/admin_authenticable.rb
module AdminAuthenticable
    extend ActiveSupport::Concern
  
    included do
      before_action :authenticate_admin!
    end
  
    private
  
    def authenticate_admin!
      api_key = request.headers['Authorization']
      @current_admin = AdminUser.find_by(api_key: api_key)
  
      render json: { error: 'Unauthorized' }, status: :unauthorized unless @current_admin
    end
  end
  
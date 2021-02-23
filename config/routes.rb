Rails.application.routes.draw do
	resources :users
	
	resources :sessions, only: [:index, :create, :destroy]
	# collection do
 #      get :list
 #    end
 #  end

	resources :order_settings

	root to: "static#home"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end


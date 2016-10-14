Rails.application.routes.draw do
  get 'welcome/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/friendships', to: "friendships#search"
  post '/friendships', to: "friendships#create"
  root 'welcome#index'

  resources :users do
    resources :events
    resources :friendships
  end

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
end

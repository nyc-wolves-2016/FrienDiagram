Rails.application.routes.draw do
  get 'welcome/index'
  root 'welcome#index'

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
    
  get '/friendships', to: "friendships#search"
  post '/friendships', to: "friendships#create"


  resources :users do
    resources :events, :path => 'events'
    resources :friendships
  end
end

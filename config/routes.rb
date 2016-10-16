Rails.application.routes.draw do
  get 'welcome/index'
  root 'welcome#index'

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  get '/friendships', to: "friendships#search"
  post '/friendships', to: "friendships#create"
  get '/friendships/new', to: "friendships#new"


  resources :users do
    resources :friendships
  end

  resources :events
  resources :user_addresses


end

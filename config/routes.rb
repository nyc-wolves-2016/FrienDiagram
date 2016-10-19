Rails.application.routes.draw do
  get 'welcome/index'
  root 'welcome#index'

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  get '/friendships', to: "friendships#search"
  post '/friendships', to: "friendships#create"
  get '/friendships/new', to: "friendships#new"
  get '/events/search', to: "events#search"
  # post '/choices', to: "venue_choices#create"
  put "/events/:event_id/confirm", to: "events#confirm"
  put "/events/:id/reset", to: "events#reset"

  resources :users do
    resources :friendships
  end

  resources :events do
    resources :venue_choices, only: [:destroy, :create]
  end
  resources :user_addresses
end

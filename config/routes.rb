Rails.application.routes.draw do
  resources :curates
  resources :merches
  resources :contacts
  resources :events
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

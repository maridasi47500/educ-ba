Rails.application.routes.draw do
  resources :cats
  get 'welcome/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
root to: "welcome#index"
end

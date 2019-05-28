Rails.application.routes.draw do
  root 'animals#tops'
  devise_for :users
  resources :animals do
    collection do
      get 'details'
      get 'tops'
    end
  end
end

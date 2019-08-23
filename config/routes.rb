Rails.application.routes.draw do
  devise_for :users
  root 'animals#tops'
  resources :animals do
    collection do
      get 'details'
      get 'tops'
    end
  end
end

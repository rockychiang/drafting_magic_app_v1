Rails.application.routes.draw do
  root to: 'site#index'

  namespace :api do
    namespace :v1 do
      resources :drafts, only: :create, defaults: { format: JSON }
    end
  end
end

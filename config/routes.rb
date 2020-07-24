Rails.application.routes.draw do
  get 'search/index'
  namespace :api do
  
    namespace :v1 do
    post 'session/login/:id', to: 'session#loginsession', as: 'loginsession'

    end
  end
  get 'trainer/index'
  get 'course/index/:id',to:'course#index', as: 'course'
  get 'video/index/:id' , to: 'video#index', as:'video'
  get 'users/info', as: 'info'
  get 'main/login' , as: 'login'
  get 'main/signup', as: 'sign_up'
  root 'home#index'
  get 'home/index'
  get 'search/index/:query',to: 'search#index', as: 'search'
  get 'trainer/videoupload/:id', to: 'trainer#videoupload', as: 'videoupload'
  get 'trainer/cthmb/:id', to: 'trainer#cthmb', as: 'ss_save'
  get 'trainer/tthmb/:id', to: 'trainer#tthmb', as: 'ts_save'
  get 'trainer/editcourse/:id', to: 'trainer#editcourse', as: 'editcourse'

  get 'trainer/main', as: 'tmain'
  get 'main/oath_signup',to:"main#oath_signup", as:'oasignup'
  get 'yoga',to:"workout#yoga", as: 'yoga'
  get 'gym',to:"workout#gym", as: 'gym'
  get 'cardio',to:"workout#cardio", as: 'cardio'
  get 'nutrition',to:"workout#nutrition", as: 'nutrition'
  get 'dance',to:"workout#dance", as: 'dance'
  get 'zumba',to:"workout#zumba", as: 'zumba'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

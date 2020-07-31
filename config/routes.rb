Rails.application.routes.draw do
  get 'search/index'
  namespace :api do
  
    namespace :v1 do
    post 'session/login/:id', to: 'session#loginsession', as: 'loginsession'
    get 'session/checksession', to: 'session#checksession', as: 'checksession'
    end
  end
  get 'trainer/index'
  get 'course/index/:id',to:'course#index', as: 'course'
  get 'video/:id/:vidid' , to: 'video#index', as:'video'
  get 'users/info', as: 'info'
  get 'main/login' , as: 'login'
  get 'main/signup', as: 'sign_up'
  root 'home#index'
  post '/signout', to:"application#signout", as: "signout"
  get 'home/index',as: 'root2'
  get 'search/index/:query',to: 'search#index', as: 'search'
  get 'trainer/videoupload/:id', to: 'trainer#videoupload', as: 'videoupload'
  get 'trainer/cthmb/:id', to: 'trainer#cthmb', as: 'ss_save'
  get 'trainer/tthmb/:id', to: 'trainer#tthmb', as: 'ts_save'
  get 'trainer/editcourse/:id', to: 'trainer#editcourse', as: 'editcourse'
get 'users/course', to: 'users#course', as: 'usercourse'
  get 'trainer/main', as: 'tmain'
  get 'main/oath_signup',to:"main#oath_signup", as:'oasignup'
  get 'yoga',to:"workout#yoga", as: 'yoga'
  get 'course/confirm/:id', to: "course#confirm", as: 'courseconfirm'
  get 'mind',to:"workout#mind", as: 'mind'
  get 'home workout',to:"workout#homeworkout", as: 'home_workout'
  get 'gym workout',to:"workout#gymworkout", as: 'gym_workout'
  get 'cardio',to:"workout#cardio", as: 'cardio'
  get 'nutrition',to:"workout#nutrition", as: 'nutrition'
  get 'dance',to:"workout#dance", as: 'dance'
  get 'zumba',to:"workout#zumba", as: 'zumba'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

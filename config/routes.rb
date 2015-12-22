Rails.application.routes.draw do
  get 'pop/index'

  get 'pop/show' => 'pop#show'
  get 'home/index'

  root 'pop#index'

  match "/pop/show" => "pop#show", via: :post
end

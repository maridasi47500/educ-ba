class WelcomeController < ApplicationController
  def index
    @cats=Cat.all
  end
end

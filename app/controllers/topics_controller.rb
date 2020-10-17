class TopicsController < ApplicationController
  def index
    @topics = Topic.all
    render json: @topics, status: :ok
  end

  def show
    @topic = Topic.find(params[:id])
    render json: @topic, status: :ok
  end

  def create
    @topic = Topic.new(topic_params)
    if @topic.save
      render json: {success: "Topic successfully created!"}
    else
      render json: {failure: "Topic failed to create!"}
    end
  end

  def update
    @topic = Topic.new(topic_params)
    @topic.update
    if @topic.save
      render json: {success: "Topic successfully updated!"}
    else
      render json: {failure: "Topic failed to update!"}
    end
  end

  def destroy
    @topic = Topic.find(param[:id])
    @topic.destroy
    if @topic.destroy
      alert("#{@topic.name} destoyed!")
    else
      alert("Delete failed!")
    end
  end

  private
  def topic_params
    params.require(:topic).permit(:name, :description)
  end
end

class PostsController < ApplicationController
  def index
    @topic = Topic.find(params[:topic_id])
    @posts = @topic.posts
    render json: @posts, status: :ok
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: {success: "New post created and was saved successfully!"}
    else
      render json: {error: "Post deletion failed!"}
    end
  end

  def update
    @post = Post.find(params[:id])
    @post.update(post_params)
    if @post.save
      render json: {success: "Post updated."}
    else
      render json: {error: "Post update falied!"}
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    if @post.destroy
      render json: {success: "Post successfully destroyed!"}
    else
      render json: {error: "Post failed to destroy!"}
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :content, :topic_id)
  end
end

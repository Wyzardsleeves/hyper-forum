class CommentsController < ApplicationController

  def index
    @comments = Comment.where("post_id": Post.find(params[:post_id]))
    render json: @comments, status: :ok
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment, status: "Comment created!"
    else
      render json: {message: "Comment failed to be created!"}
    end
  end

  def update

  end

  def destroy
    @comment = Comment.find(param[:id])
    @comment.destroy
    if @comment.destroy
      render json: {message: "Comment deletion successful."}
    else
      render json: {message: "Comment deletion failed."}
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:content, :post_id)
  end
end

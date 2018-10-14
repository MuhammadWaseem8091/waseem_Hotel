import React from "react";
import "./ArticleComponent.css";
import ButtonComponent from "./ButtonComponent";

const ArticleComponent = props => {
  const {
    newsArticle: {
      author,
      source,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content
    },
    index,
    deleteNews
  } = props;

  return (
    <div className="border border-secondary rounded mb-3">
      <div className="news">
        <img src={urlToImage} alt="" />
        <h2>{title}</h2>
        <h5>{author}</h5>
        <h5>{description}</h5>
        <p>{content}</p>
        <span>Source Link: </span>
        <a href={url}>{source.name}</a>
        <div>{publishedAt}</div>

        <div>
          <ButtonComponent index={index} handleClick={deleteNews} >
            Delete
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default ArticleComponent;

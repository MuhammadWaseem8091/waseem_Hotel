import React from "react";
// import "./ArticleComponent.css";

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
    }
  } = props;

  return (
    <div className="article">
      <img src={urlToImage} alt="" />
      <h2>{title}</h2>
      <h5>{author}</h5>
      <h5>{description}</h5>
      <p>{content}</p>
      <a href={url}>{source.name}</a>
      <div>{publishedAt}</div>
    </div>
  );
};

export default ArticleComponent;

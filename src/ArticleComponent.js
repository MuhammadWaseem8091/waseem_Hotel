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
        <a href={url}>{source.name}</a>
        <div>{publishedAt}</div>
        <div>
          <button
            onClick={() => deleteNews(index)}
            className="btn btn-secondary btn-lg m-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleComponent;

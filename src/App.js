import React, { Component } from "react";
import "./App.css";
import newsFeed from "./NewsFeed";
import ArticleComponent from "./ArticleComponent";
import FilterComponent from "./FilterComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      searchContent: "",
    };
  }

  async componentDidMount() {
    try {
      const news = await newsFeed();
      this.setState({
        news
      });
    } catch (error) {
      console.error(error);
    }
  }

  deleteNews = index => {
    let remainingNews = this.state.news;
    remainingNews.splice(index, 1);
    this.setState({
      news: remainingNews
    });
  };

  handleChange = event => {
    this.setState({ searchContent: event.target.value.toLowerCase() });
  };

  render() {
    const { news, searchContent } = this.state;

    const filteredArticles = news.filter(item => {
      return (
        item.content !== null &&
        item.content.toLowerCase().includes(searchContent)
      );
    });

    const displayNews =
      filteredArticles.length > 0 ? (
        filteredArticles.map((article, index) => {
          return (
            <ArticleComponent
              newsArticle={article}
              index={index}
              deleteNews={this.deleteNews}
            />
          );
        })
      ) : (
        <h1>No such news</h1>
      );

    return (
      <div className="app">
        <div className="textInput">
          <FilterComponent
            searchContent={searchContent}
            handleChange={this.handleChange}
          />
        </div>
        <div className="list">{displayNews}</div>
      </div>
    );
  }
}

export default App;

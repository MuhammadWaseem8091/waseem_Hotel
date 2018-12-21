import React, { Component } from "react";
import "./App.css";
import newsFeed from "./NewsFeed";
import ArticleComponent from "./ArticleComponent/ArticleComponent";
import FilterComponent from "./FilterComponent/FilterComponent";
import ButtonComponent from "./ButtonComponent/ButtonComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      backUpNews:[],
      searchContent: ""
    };
  }

  async componentDidMount() {
    try {
      const news = await newsFeed();
      const backUpNews = await newsFeed();
      this.setState({
        news, backUpNews
      });
    } catch (error) {
      console.error(error);
    }
  }

  resetNews = () => {
    this.setState({
      backUpNews: this.state.backUpNews,
      news: this.state.backUpNews,
    });
    console.log(this.state.backUpNews);
  };

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
        <h1>No such content</h1>
      );

    return (
      <div className="app">
        <h2>Top business headlines in the US right now</h2>

        <div className="flex">
          <FilterComponent
            searchContent={searchContent}
            handleChange={this.handleChange}
          />
          <ButtonComponent handleClick={this.resetNews}> 
            Display All
          </ButtonComponent>
        </div>

        <div className="article">
          {displayNews}
        </div>
      </div>
    );
  }
}

export default App;

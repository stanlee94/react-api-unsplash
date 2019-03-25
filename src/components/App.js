import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../apis/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { imgList: [] };

  handleChange = async term => {
    const response = await unsplash(term);

    this.setState({
      imgList: response.data.results
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onChange={this.handleChange} />
        <ImageList images={this.state.imgList} />
      </div>
    );
  }
}

export default App;

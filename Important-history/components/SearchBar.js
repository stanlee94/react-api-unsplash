import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { term: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  handleChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div
        className="ui container segment form field"
        style={{ marginTop: 10 }}
      >
        <form onSubmit={this.handleSubmit}>
          <label>Image Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;

import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { term: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
  }

  componentDidUpdate() {
    this.props.onChange(this.state.term);
  }

  render() {
    return (
      <div
        className="ui container segment form field"
        style={{ marginTop: 10 }}
      >
        <label>Image Search</label>
        <input
          type="text"
          value={this.state.term}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;

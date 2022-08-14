import React from "react";
class Search extends React.Component {
  state = { term: "" };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="item">
        <form onSubmit={this.onFormSubmit} className="ui icon input">
          <input
            value={this.state.term}
            onChange={this.onInputChange}
            className="prompt"
            placeholder="search car"
          />
          <i className="search link icon"></i>
        </form>
      </div>
    );
  }
}
export default Search;

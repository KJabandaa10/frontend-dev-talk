import React from "react";

class Options extends React.Component {
  render() {
    return (
      <div className="options ui container">
        <h5>Your preferences</h5>
        <div className="ui toggle checkbox">
          <input type="checkbox" name="public" />
          <label>Dark mode</label>
        </div>
        <div className="ui toggle checkbox">
          <input type="checkbox" name="public" />
          <label>Open links in new tabs</label>
        </div>
      </div>
    );
  }
}

export default Options;

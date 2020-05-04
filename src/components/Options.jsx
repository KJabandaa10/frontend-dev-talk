import React from "react";
import { connect } from "react-redux";
import { toggleNewTabs } from "../actions";

class Options extends React.Component {
  render() {
    return (
      <div className="options ui container">
        <h5>Preferences</h5>
        <div className="ui toggle checkbox" onClick={toggleNewTabs()}>
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

const mapStateToProps = state => {
  return { newTabs: state.newTabs };
};

export default connect(mapStateToProps, { toggleNewTabs })(Options);

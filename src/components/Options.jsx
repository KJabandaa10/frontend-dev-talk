import React from "react";
import { connect } from "react-redux";
import { toggleNewTabs } from "../actions";

class Options extends React.Component {
  //   toggleNewTabs = () => {
  //     this.props.dispatch(toggleNewTabs);
  //   };

  render() {
    return (
      <div className="options ui container">
        <h5>Preferences</h5>
        <div className="ui toggle checkbox">
          <input type="checkbox" name="public" />
          <label>Dark mode</label>
        </div>
        <div className="ui toggle checkbox" onClick={this.props.toggleNewTabs}>
          <input type="checkbox" name="public" />
          <label>Open links in new tabs</label>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleNewTabs(newTabs) {
    return () => {
      dispatch(toggleNewTabs(newTabs));
    };
  },
});

export default connect(mapDispatchToProps, { toggleNewTabs })(Options);

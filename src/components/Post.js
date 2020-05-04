import React from "react";
import { connect } from "react-redux";
import { Card, Image } from "semantic-ui-react";
import Remarkable from "remarkable";

const getMarkup = text => {
  if (text) {
    const md = new Remarkable();
    return { __html: md.render(text) };
  } else {
    return { __html: `` };
  }
};

const notImage = ["self", "default"];

const Post = ({ url, title, author, selftext, thumbnail, newTabs }) => (
  <Card href={url} rel="noopener noreferrer" style={{ width: "100%" }}>
    <Card.Content>
      {!notImage.includes(thumbnail) && (
        <Image floated="left" src={thumbnail} rounded bordered size="tiny" />
      )}
      <Card.Header>{title}</Card.Header>
      <Card.Meta>by {author}</Card.Meta>
      <Card.Description dangerouslySetInnerHTML={getMarkup(selftext)} />
    </Card.Content>
  </Card>
);

const mapStateToProps = state => {
  return { newTabs: state.newTabs };
};

export default connect(mapStateToProps, {})(Post);

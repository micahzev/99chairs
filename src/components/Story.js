import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import '../styles/story.css';

class Story extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const date = new Date(this.props.story.time*1000);

    return (
      <div className="storyContainer">
      <div className="index">
        {this.props.index}
      </div>
      <div className="storyMetadata">

        <div className="date">
          {date.toString().slice(3,16)} {date.toString().slice(16,21)}
        </div>

        <div className="by">
          By: <span className="author">{this.props.story.by}</span>
        </div>

      </div>

        <div className="storyTitle">
            <a href={this.props.story.url} >
            {this.props.story.title}
            </a>

          </div>

      </div>
    );
  }
}


export default Story;

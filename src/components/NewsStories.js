import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import '../App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import fetch from './fetch';
import { fetchStories } from '../actions/stories';

import Story from './Story';

class NewsStories extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const stories = this.props.stories ? this.props.stories : [];


    return (
      <div>

      {stories.map((story, idx) =>
        <Story key={idx} className="storyitem" story={story} index={idx} />
       )}

      </div>
    );
  }
}

const FetchedData = fetch(NewsStories, {
  actions: [fetchStories]
});

function mapStateToProps(state) {
  const stories = state.stories;
  return {
    stories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchStories: bindActionCreators(fetchStories, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchedData);

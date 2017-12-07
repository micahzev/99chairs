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
    this.state = {
      loading:true
    }
  }

  componentDidUpdate(){

        if (this.props.stories && this.props.stories.length > 0 && this.state.loading){

        setTimeout(this.loaded.bind(this), 0);

        // this.refs.scrollcolumns.scrollLeft += window.innerWidth;
        // window.requestAnimationFrame(function() {
        //     _this.refs.scrollcolumns.scrollLeft += window.innerWidth;
        // });
        }
    }

  loaded(){
  this.setState({
    loading:false,
  });
}

  render() {

    const stories = this.props.stories ? this.props.stories : [];

    return (
      <div>

      {this.state.loading ? <div className="loading">loading news...</div> :null}

      {stories.map((story, idx) =>
        <div>
        <Story key={idx} className="storyitem" story={story} index={idx} />
        <hr/>
        </div>
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

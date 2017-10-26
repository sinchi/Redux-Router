import React, { Component } from 'react';

import { connect } from 'react-redux';
import {deletePost , fetchPost} from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {

  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeletePost(event){
    this.props.deletePost(this.props.match.params.id, (id) => {
      console.log(`Post with id: ${id} est supprime avec succee`);
       this.props.history.push('/');
    });
  }

  render(){
    const { post } = this.props;
    if(!post){
      return <div>Loading ...</div>;
    }
    return (
      <div>
        <div className="text-xs-right">
          <button className="btn btn-danger pull-xs-right" onClick={ this.onDeletePost.bind(this) }>
            Delete a Post
          </button>
        </div>
        <Link to="/posts">Back to Index</Link>
        <h3>{ post.title }</h3>
        <h6>Categories: { post.categories }</h6>
        <p>{ post.content }</p>
      </div>
    )
  }
}
function mapStateToProps({posts, id }, ownProps){
  return { post: posts[ownProps.match.params.id] };
}
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);

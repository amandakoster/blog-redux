import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post =>  {
            return(
            <li className="list-group-item" key={post.id}>
            {post.title}
            </li>
        );
    });
    }
    
    render() {
        return (
            <div>
            <div className="text-xs-right">
                <Link className="btn btn-primary" to="/post/new">
                Add A Post
                </Link>
            </div>

            <h5>Posts!</h5>
            <ul className="list-group">
            {this.renderPosts()}
            </ul>
            </div>

        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts } )(PostIndex);


import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';


class PostIndex extends React.Component {

    componentDidMount() {

    }


    render() {
        return (
            <div>
            Post Index
            </div>

        );
    }
}

export default connect(null, { fetchPost } )(PostIndex)


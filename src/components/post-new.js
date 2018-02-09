import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostNew extends React.Component {

    renderField(field) {

        const { meta: {touched, error }} = field;
        const className = `form-group has-error ${touched && error ? 'has-danger' : ''}`;

        return(
        <div className={className}>
            <label>{field.label}</label>
                <input
                className="form-control"
                type="text"
                {...field.input}
                />
                <div className="text-danger"> {touched ? error : ''} </div>
        </div>
        );
    }

    onSubmit(values){
        this.props.createPost(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Post Title"
                    name="title"
                    component={this.renderField}
                    />
                <Field
                    label="Categories"
                    name="category"
                    component={this.renderField}
                    />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                    />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
 
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = "Enter a title.";
    }
    if(!values.category){
        errors.category = "Enter some categories.";
    }
    if(!values.content){
        errors.content = "Enter your text.";
    }
    
return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(
    connect(null, { createPost }) (PostNew)
);
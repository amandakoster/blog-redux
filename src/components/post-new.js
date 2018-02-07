import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends React.Component {

    renderField(field) {

        const { meta } = field;
        const className = `form-group has-error ${meta.touched && meta.error ? 'has-danger' : ''}`;

        return(
        <div className="form-group has-error is-invalid">
            <label>{field.label}</label>
                <input
                className="form-control"
                type="text"
                {...field.input}
                />
                <div className="text-danger"> {meta.touched ? meta.error : ''} </div>
        </div>
        );
    }

    onSubmit(values){
    console.log(values,'values')
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
})(PostNew);
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Post from './Posts/Posts';
import _css from './Wall.module.css';


const FormForWall = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div className={_css.wall_textarea}>
            <Field className={_css.textarea} name={"textPost"} component={"textarea"} />
        </div>
        <div className={_css.buttons}>
            <button>Отправить</button>
        </div>
    </form>
}

const WallReduxForm = reduxForm({ form: 'WallForm' })(FormForWall)

const Wall = (props) => {


    let NewPost_el = props.postData.map(post_information => <Post name_surname={post_information.name} when_time={post_information.time} message={post_information.text_post} key={post_information.id} likes_count={post_information.likes_q} />)

    const onSubmit = (formData) => {
        props.addPost(formData.textPost);
    }


    return <div>
        <WallReduxForm onSubmit={onSubmit} />
        <div className={_css.sorting_post}>
            {NewPost_el}
        </div>
    </div>

}





export default Wall; 
import React from 'react';
import { AddPost_Creater, updateNewPostText_Creater } from '../../../../redux/profile_reducer';
import Post from './Posts';
import _css from './Wall.module.css';




const Wall = (props) => {
    console.log(props);
    let NewPost_el = props.postData.map(post_information => <Post name_surname={post_information.name} when_time={post_information.time} message={post_information.text_post} likes_count={post_information.likes_q} />)

    let refTextArea = React.createRef();

    let onPostChange = () => {
        let text = refTextArea.current.value;

        props.dispatch(
            updateNewPostText_Creater(text)
        )

    }

    let addPost = () => {
        props.dispatch(
            AddPost_Creater()
        )

    }

    return <div>

        <div className={_css.wall_textarea}><textarea className={_css.textarea} ref={refTextArea} onChange={onPostChange} value={props.newPostText} /></div>
        <button onClick={addPost}>Отправить</button>
        <div className={_css.sorting_post}>
            {NewPost_el}
        </div>
    </div>

}

export default Wall; 
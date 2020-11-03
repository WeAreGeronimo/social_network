import React from 'react';
import Post from './Posts';
import _css from './Wall.module.css';




const Wall = (props) => {
    
    let NewPost_el = props.postData.map(post_information => <Post name_surname={post_information.name} when_time={post_information.time} message={post_information.text_post} likes_count={post_information.likes_q} />)
    
    let refTextArea = React.createRef(); 
    
    let onPostChange = () => {
        let text = refTextArea.current.value;
        console.log(props.newPostText);
        props.updateNewPostText(text);
        
    }

    let addPost = () => {
        props.addPost();
         
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
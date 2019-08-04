import React from 'react';
import cls from './style.module.css';
import Post from './Post/';



function PostArea(props) {


    return (
        <div className={cls.post__area}>
            {props.PostData.map(el => <Post key={el.id} id={el.id} text={el.text} like={el.like} />)}
        </div>
    )
}

export default PostArea;
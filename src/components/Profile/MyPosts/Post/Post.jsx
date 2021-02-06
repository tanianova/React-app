import s from './Post.module.css';

const Post =(props) => {
  return (

     <div className={s.item}>
     <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" alt="ava"/>
       {props.message}
        <div><span>like</span>{props.likesCount}
        </div>


 </div>

  )
}

export default Post;

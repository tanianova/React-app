import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button> add post</button>
                </div>

            </div>
            <div className={s.posts}>
                <Post message='hi, how are you' likesCount='15'/>
                <Post message='its my first project' likesCount='5'/>
            </div>
        </div>
    )
}

export default MyPosts;

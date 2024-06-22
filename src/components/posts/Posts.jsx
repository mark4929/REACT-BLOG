import Post from '../post/Post'
import Post1 from '../post1/Post1'
import Post2 from '../post2/Post2'
import Post3 from '../post3/Post3'
import './posts.css'

export default function Posts(){
    return(
        <div className="posts">
            <Post/>
            <Post1/>
            <Post2/>
            <Post3/>
            
        </div>
    )
}
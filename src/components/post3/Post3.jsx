import './post3.css'

export default function Post3(){
    return(
        <div className="post3">
            <img className="postImg"
            src="https://images.pexels.com/photos/4614509/pexels-photo-4614509.jpeg?cs=srgb&dl=pexels-ianjohnson-4614509.jpg&fm.jpg"
            alt="blm3"
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Rights</span>
                    <span className="postCat">Freedom</span>
                    <span className="postCat">Life</span>

                </div>
                <span className="postTitle">
                Strategies and tactics
                </span>
                <hr/>
                
            </div>
            <p classname ="postDesc">
            Black Lives Matter originally used various social media platforms—including hashtag activism—to reach thousands of people rapidly. Since then, Black Lives Matter has embraced a diversity of tactics. Black Lives Matter protests have been overwhelmingly peaceful; when violence does occur, it is often committed by counter-protesters.
         </p>
        </div>
    )
}
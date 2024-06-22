import './post1.css'

export default function Post1(){
    return(
        <div className="post1">
            <img className="postImg"
            src="https://images.pexels.com/photos/4613886/pexels-photo-4613886.jpeg?cs=srgb&dl=pexels-life-matters-3043471-4613886.jpg&fm=jpg"
            alt="blm1"
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Rights</span>
                    <span className="postCat">Freedom</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                 Decentralization
                </span>
                <hr/>
                
            </div>
            <p classname ="postDesc">
            The phrase "Black Lives Matter" can refer to a Twitter hashtag, a slogan, a social movement, a political action committee, or a loose confederation of groups advocating for racial justice. As a movement, Black Lives Matter is grassroots and decentralized, and leaders have emphasized the importance of local organizing over national leadership. The structure differs from previous black movements, like the Civil rights movement of the 1950s and 1960s. 
            </p>
        </div>
    )
}
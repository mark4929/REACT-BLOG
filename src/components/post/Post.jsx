import './post.css'

export default function Post(){
    return(
        <div className="post">
            <img className="postImg"
            src="https://images.pexels.com/photos/4613880/pexels-photo-4613880.jpeg?cs=srgb&dl=pexels-life-matters-3043471-4613880.jpg&fm=jpg"
            alt="blm"
            
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Rights</span>
                    <span className="postCat">Freedom</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                Movement for Black Lives
                </span>
                <hr/>
                
            </div>
            <p classname ="postDesc">
            The Movement for Black Lives (M4BL) is a coalition of more than 50 groups representing the interests of black communities across the United States. Members include the Black Lives Matter Network, the National Conference of Black Lawyers, and the Ella Baker Center for Human Rights.Endorsed by groups such as Color of Change, Race Forward, Brooklyn Movement Center, PolicyLink, Million Women March Cleveland, and ONE DC,the coalition receives communications and tactical support from an organization named Blackbird.
            </p>
        </div>
    )
}
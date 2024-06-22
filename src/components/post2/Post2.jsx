import './post2.css'

export default function Post2(){
    return(
        <div className="post2">
            <img className="postImg"
            src="https://images.pexels.com/photos/4614510/pexels-photo-4614510.jpeg?cs=srgb&dl=pexels-ianjohnson-4614510.jpg&fm.jpg"
            alt="blm2"
            
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Rights</span>
                    <span className="postCat">Freedom</span>
                    <span className="postCat">Life</span>

                </div>
                <span className="postTitle">
                Broader movement
                </span>
                <hr/>
                
            </div>
            <p classname ="postDesc">
            Concurrently, a broader movement involving several other organizations and activists emerged under the banner of "Black Lives Matter", as well. In 2015, Johnetta Elzie, DeRay Mckesson, Brittany Packnett, and Samuel Sinyangwe initiated Campaign Zero, aimed at promoting policy reforms to end police brutality
            </p>
        </div>
    )
}
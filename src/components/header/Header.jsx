import './header.css'

export default function Header(){
    return(
        <div  className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Black Lives Matter</span>
                <span className="headerTitleLg">B.L.M</span>
            </div>
            <img className="headerImg" 
            src="https://images.pexels.com/photos/4614165/pexels-photo-4614165.jpeg?cs=srgb&dl=pexels-life-matters-3043471-4614165.jpg&fm=jpg"
            alt="hd"
            />

        </div>
    )
}
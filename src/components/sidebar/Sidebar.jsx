import './sidebar.css'

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT B.L.M</span>
                <img className='sidebarImg'
                 src="https://images.pexels.com/photos/4614505/pexels-photo-4614505.jpeg?cs=srgb&dl=pexels-ianjohnson-4614505.jpg&fm=jpg"
                alt="sd"
                 />
                 <p>
                 Black Lives Matter (BLM) is a decentralized political and social movement that seeks to highlight racism, discrimination, and racial inequality experienced by black people
                 </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">HASHTAG</span>
               <ul className="sidebarList">
                <li className="sidebarListItem">Black Rights</li>
                <li className="sidebarListItem">Black Life</li>
                <li className="sidebarListItem">Black Freedom</li>

               </ul>
            </div>
            <div className="sidebarItem">
             <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial" >
              
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
                  
            </div> 
            </div>


        </div>
    )
}
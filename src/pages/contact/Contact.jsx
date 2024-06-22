import './contact.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Contact(){
  return (
    <div className="contact">
        <div className="contactWrapper">
           <div className="contactTitle">
            <span className="contactMessageTitle">Send Message</span>
           </div>
           <form className="contactForm">
            <label>First name</label>
            <input type="text" placeholder="Safak" />
            <label>Last name</label>
            <input type="text" placeholder="Saun" />
            <label>Email</label>
            <input type="email" placeholder="Safak@gmail.com" />
            <label>Message</label>
            <textarea type="text" placeholder="Enter Message"></textarea>
            <button className="contactSubmit">Submit</button>
           </form>
        </div>
            <Sidebar/>   
    </div>
  )
}
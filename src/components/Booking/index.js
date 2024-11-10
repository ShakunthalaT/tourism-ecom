import {Component} from "react"
import {Link} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './index.css' 

class Booking extends Component{
   state = {
    username:"",
    email:"",
    phoneNumber:"",
    NoOfAdults:"",
    NoOfChild:"",
} 



submitForm = async (event)=>{
    event.preventDefault()
    const {username,email,phoneNumber,NoOfAdults,NoOfChild} = this.state 
    const userDetails = {username,email,phoneNumber,NoOfAdults,NoOfChild}
    const url = "https://tourism-users.onrender.com/users/" 
    const options = {
        method:"POST",
        body: JSON.stringify(userDetails),
        headers:{
           "Content-Type" : "application/json"
        }
    }

    const response = await fetch(url,options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
        console.log(data)
      } else {
        console.log(data.error)
      }

}


renderCheckin = ()=>(
   <div className="check-in-card">
    <div>
        <p>CHECK-IN</p>
        <input type="date" className='date-type'/>
    </div>
   <hr/>
   <div>
        <p>CHECK-OUT</p>
        <input type="date" className='date-type'/>
    </div>
    <hr/>
    <div className="room-amount-container">
    <div className="room-container">
        <p>ROOMS</p>
        <div className='count-container'>
            <button type="button" className='increase-btn'>+</button>
            <p>1</p>
            <button type="button" className='decrease-btn'>-</button>
        </div>
    </div>
      <div className="price-container">
        <Link to="/confirmdetails">
          <button type="submit" className="price-btn">Rs 1230</button>
        </Link>
       <p>Click to pay token amount</p>
      </div>
    </div>

   </div>
)


 render(){
        return(
            <>
            <Header/>
            <div className="booking-container">
                <form className="user-details-container" onSubmit={this.submitForm}>
                    <div className="input-container">
                        <input type="text" className="input-el"/>
                        <input type="text" className="input-el"/>
                        <input type="text" className="input-el"/>
                        <div className="input-el-container">
                        <input type="text" className="input-el-1"/>
                        <input type="text" className="input-el-1"/>
                    </div>
                        
                    </div>

                  {this.renderCheckin()}
                 
             </form>
             
            </div>
            <Footer/>
            </>
        )
    }
}

export default Booking
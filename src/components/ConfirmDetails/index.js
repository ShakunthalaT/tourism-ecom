import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './index.css' 

class ConfirmDetails extends Component{
state={
    userDetails:[],
} 

componentDidMount(){
    this.getUsers()
} 

getUsers = async()=>{
    const url = "https://tourism-users.onrender.com/users/" 
    const options = {
        method:"GET",
    }
    const response = await fetch(url,options)
    const data = await response.json()
    console.log(data)
}

renderConfirmDetails = () =>(
    <div className="check-card-view">
    <div>
        <p>CHECK-IN</p>
        <input type="date" className='date-view'/>
       </div>
   <hr/>
   <div>
        <p>CHECK-OUT</p>
        <input type="date" className='date-view'/>
        
    </div>
    <hr/>
    <div className='room-view'>
    <div className="room-container-view">
        <p>ROOMS</p>
        <p>1</p>
    </div>
      <div>
        <button type="button" className='price-btn-view'>Rs 1230</button>
    </div>
    </div>

   </div>
)

    render(){
        return(
            <>
        <Header/>
            <div className='confirm-view'>
                <div className='confirm-container'>
                    <div className='order-main'>
                      <div>
                        Arjun
                      </div>
                      <p className='order-text'>Order Complete</p>
                      </div>
                    {this.renderConfirmDetails()}
                </div>
            </div>
            <Footer/>
            </>
        )
    }
}

export default ConfirmDetails
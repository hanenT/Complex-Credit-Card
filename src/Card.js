import React from 'react';
import './Card.css';



  //Check Number Validation
  const checkDigit = num => {
  
    var tab = []
    for (var i=0; i< num.length; i +=4) {
      var res = num .slice (i, i+4)
      tab.push(res)
    }
    return tab.join(' ')
  }
  const checkDate = date => {
    var tab = []
    for (var i=0; i< date.length; i +=2) {
      var res = date .slice (i, i + 2)
      tab.push(res)
    }
    return tab.join('/').slice(0, 5);
  }
class Card extends React.Component {
    
  state = {
      name: '',
      number:'',
      date: ''
      
    };
  
  //Name of Card Owner
  nameChange=e=>{
    this.setState({
      name: e.target.value.toString()
    });
  }
  //Card Number
  numberChange =e=> {
    this.setState({
      number: checkDigit(e.target.value)
    });
  }
  //Expiration
  dateChange =e=> {
    this.setState({
    date: checkDate(e.target.value)
    });
  }

  render() {
    return <div className="card-validation">
        <div className="card">
        <div className="title">
          <h1 className="title">My Credit Card</h1>
        </div>
        <div className="master">
          <img className="master-img" src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png"
           height="70px" width="100px" alt="" />
        </div>
      
      <div className="validation">
        <div className="number">
          <label>Card Number: {this.state.number.padEnd(16, '*')}</label>
        </div>
        <div className="holder">
          <label>Name: {this.state.name.padEnd(20, '*')}
          </label>
        </div>
        <div className="expiry">
          <label>VALIDTHRU: {this.state.date.padEnd(4, '*')}
          </label>
        </div>
      </div>
    </div>
  <div className="validation-form">
      <label>NAME
        <input type="text" maxLength="20" onChange={this.nameChange}/>
      </label>
      <label>NUMBER
        <input type="text" maxLength="16" onChange={this.numberChange}/>
      </label>
      <div className="">
        <label className="">EXPIRATION DATE</label>
          <input type="text" onChange={this.dateChange} />
      </div>
    </div>
</div>

  }
}
export default Card;
    


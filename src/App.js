import React from 'react';
import './App.css';
import Form from './Form.js'

class App extends React.Component {

  state = {
    total: [],
    nameError: false
  };

  //Function to find the user inputs and store them to the state
  handleChange = ({ target: { name, value} }) => {
    this.setState({ [name]: value });
  }

  //Function to validate and submit the form
  handleSubmit = (e) => {

    //prevent the page reloading
    e.preventDefault();

    //setting state items to variable
    let name = this.state.name;
    let email = this.state.email;
    let telephone = this.state.telephone;
    let cardNumber = this.state.cardNumber;
    let cvv = this.state.cvv;
    let expiry = this.state.expiry;
    let comments = this.state.comments;
    let amount = this.state.amount;

    //Validation logic before accepting the donation
    if (!name) {
        this.setState({nameError: !this.state.nameError})
        console.log('name error');
   }  if (!email || email.includes('@') === false ) {
         console.log('email error');
   }  if(!telephone || telephone.length !== 11) {
         console.log('number error');
    }  if(!cardNumber || cardNumber.length !== 16) {
        console.log('card number error');
    }  if (!cvv || cvv.length !== 3) {
        console.log('cvv error');
    }  if(!expiry || expiry.length !== 5) {
        console.log('expiry error');
    } if(!comments) {
        console.log('comments error');
    } else if( amount > this.amountLeft() || amount <= 0 || !amount) {
        console.log('money error');
    } else {
      //Donation passes teh validation and is successfully added
      this.setState({total: this.state.total.concat({name, email, telephone, cardNumber, cvv, expiry, comments, amount}), nameError: !this.state.nameError});
    }
  }

  //Function to help find the sum of the arrays
  getSum(total, num) {
     return total + num;
  }

  //Function to work out how much money is left after the new donation is made.
  amountLeft = () => {
    const overallTotal = 500;
    const startingTotal = 333;
    let donationArray = [];

    this.state.total.map(total => donationArray.push(parseInt(total.amount)));
    if(donationArray.length >= 1) {
      let newTotal = overallTotal - (startingTotal + donationArray.reduce(this.getSum));
      return newTotal;
    } else {
      let newTotal = overallTotal - startingTotal;
      return newTotal;
    }
  }

  //Function to set the progress bar and increase it based on the amount donated.
  progressBar = () => {
    let moneyArray = []
    const startingProgress = 333;

    this.state.total.map(total => moneyArray.push(parseInt(total.amount)));
    if(moneyArray.length >= 1) {
      let progressBarWidth = (startingProgress * 0.2) + (moneyArray.reduce(this.getSum)*0.2);
      return progressBarWidth;
    } else {
      let progressBarWidth = (startingProgress * 0.2);
      return progressBarWidth;
    }
  }

  //Function to set the number of people who have donated and to increase the number on every donation
  peopleDonated = () => {
    let startingNumber = 42;
    let newPeople = this.state.total.length;
    let totalPeople = startingNumber + newPeople;
    return totalPeople;
  }


  render() {
    return (
      <section>
        <div className="popup">
          <h4><span className="h4-bold">${this.amountLeft()}</span> still needed for this project</h4>
        </div>
        <div className="main">
          <div className="progressBar" style={{ width: this.progressBar() + '%'}}>

          </div>
          <div className="form">
            <p><span className="orange">Only 3 days left</span> to fund this project.</p>
            <p>Join the <span className="bold">{this.peopleDonated()}</span> other donors who have already supported this project.
            Every dollar helps.</p>
            <Form
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                nameError={this.state.nameError}
              />
          </div>
        </div>
      </section>
    );
  }
}

export default App;

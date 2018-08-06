import React from 'react';

const Form = ({ handleChange, handleSubmit, state }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
    {(state.nameError === true)  &&
      <div className="error">Please enter a name</div>
    }
    <input type="email" name="email" placeholder="Email Address"  onChange={handleChange}/>
    {(state.telephoneError === true)  &&
      <div className="error">Please enter a valid email address</div>
    }
    <input type="tel" name="telephone" placeholder="Phone Number"  onChange={handleChange}/>
    {(state.telephoneError === true)  &&
      <div className="error">Please enter a valid telephone number</div>
    }
    <input type="number" name="cardNumber" placeholder="Card Number"  onChange={handleChange}/>
    {(state.cardNumberError === true)  &&
      <div className="error">Please enter a valid card number</div>
    }
    <div className="helpers">Long number on the front of your card</div>
    <input type="number" name="cvv" placeholder="Security Number"  onChange={handleChange}/>
    {(state.cvvError === true)  &&
      <div className="error">Please enter a valid cvv</div>
    }
    <div className="helpers">The 3 dgits to the right of the signature stripe located on the back of your card</div>
    <input type="text" name="expiry" placeholder="Expiry Date"  onChange={handleChange}/>
    {(state.expiryError === true)  &&
      <div className="error">Please enter an expiry date</div>
    }

    <textarea rows="4" cols="50" placeholder="Comments"  name="comments" onChange={handleChange}></textarea>
    {(state.commentsError === true)  &&
      <div className="error">Please enter a comment</div>
    }
      <input type="number" name="amount" id="amount" placeholder="$" onChange={handleChange}/>
      <input type="submit" value="Give Now" />
      {(state.amountError === true)  &&
        <div className="error">Please enter an amount</div>
      }
      <a href="#" alt="Link to why you should donate">Why give $50?</a>
    </form>
  );
};

export default Form;

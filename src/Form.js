import React from 'react';

const Form = ({ handleChange, handleSubmit, nameError }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
      {nameError && <p>Name error</p>}
      <input type="email" name="email" placeholder="Email Address"  onChange={handleChange}/>
      <input type="tel" name="telephone" placeholder="Phone Number"  onChange={handleChange}/>
      <input type="number" name="cardNumber" placeholder="Card Number"  onChange={handleChange}/>
      <div className="helpers">Long number on the front of your card</div>
      <input type="number" name="cvv" placeholder="Security Number"  onChange={handleChange}/>
      <div className="helpers">The 3 dgits to the right of the signature stripe located on the back of your card</div>
      <input type="text" name="expiry" placeholder="Expiry Date"  onChange={handleChange}/>
      <textarea rows="4" cols="50" placeholder="Comments"  name="comments" onChange={handleChange}></textarea>
      <input type="number" name="amount" id="amount" placeholder="$" onChange={handleChange}/>
      <input type="submit" value="Give Now" />
      <a href="#" alt="Link to why you should donate">Why give $50?</a>
    </form>
  );
};

export default Form;

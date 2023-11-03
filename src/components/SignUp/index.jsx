import React, { useState } from 'react';

const Signup = ({ show, closeSignup }) => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [showstate, setshow] = useState(show);
  console.log(showstate);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (email.match(emailPattern)) {
      setIsValidEmail(true);
      setIsEmailEmpty(false);
      window.location.href = 'https://app.loch.one/welcome';
    } else {
      if (email.trim() === '') {
        setIsEmailEmpty(true);
      } else {
        setIsEmailEmpty(false);
      }
      setIsValidEmail(false);
    }
  };
  const closeIt = () => {
    setshow('');
    closeSignup();
  };
  return (
    <>
      <div className={showstate + ' Signup_page_container'}>
        {showstate === "show" && (
          <span className='close' onClick={()=>{closeIt()}}>X</span>
        )}
        <div className='signup_sub_container'>
          <h2>Sign up for exclusive access.</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder='Your email address'
              value={email}
              onChange={handleEmailChange}
            />
            <button type="submit">Get started</button>
            {!isValidEmail && !isEmailEmpty && (
              <p className='error'>Please enter a valid email address.</p>
            )}
            {isEmailEmpty && <p className='error'>Email cannot be empty.</p>}
          </form>
          <p>You’ll receive an email with an invite link to join.</p>
        </div>
      </div >
    </>
  );
};

export default Signup;

import React, { useEffect, useState } from 'react';
import Select from 'react-select'; // Import the Select component
import './signup.css'; // Import the CSS file for styling

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');
  const [nationality, setNationality] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordError1, setPasswordError1] = useState('');
  const [passwordError2, setPasswordError2] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [formValid, setFormValid] = useState(false);


  useEffect(() => {
    validate_form();
  },[name, age, nationality, gender, password, email, cpassword]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    if (value.length < 3) {
      setEmailError('Email must contain at least 3 characters.');
      console.log('error: email length');
    } else if (!value.includes('@')) {
      setEmailError('Email must contain "@" symbol.');
      console.log('error: @ symbol');
    } else {
      setEmailError('');
    }
  };

  // Event handler for Name input
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
// Call validate_form() after setting nationality value
const handleNationalityChange = (selectedOption) => {
  setNationality(selectedOption.value);
};

  // Data of Countries
  const countries = [
    { value: 'pakistan', label: 'Pakistan' },
    { value: 'usa', label: 'USA' },
    { value: 'germany', label: 'Germany' },
    { value: 'russia', label: 'Russia' },
    { value: 'iran', label: 'Iran' },
  ];
  // Event handler for Age input
  const handleAgeChange = (e) => {
    const { value } = e.target;
    const ageValue = parseInt(value, 10); // Convert value to a number
    setAge(ageValue);

    if (ageValue < 18 || ageValue >= 100) {
      // Update comparison logic
      setAgeError('You are not Eligible');
    } else {
      setAgeError('');
    }
  };
  // Event fo gender
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  // Event fo Password
  const handlePasswordChange = (e) => {
    // setPassword(e.target.value);
    const { value } = e.target;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError1('Password must be atleast 9 characters');
    } else {
      setPasswordError1('');
    }
  };
  // Event fo Confrom Password

  const handlePasswordChange2 = (e) => {
    // setCPassword(e.target.value);
    const { value } = e.target;
    setCPassword(value);
    if (password && value !== password) {
      setPasswordError('Password does not matched');
    } else {
      setPasswordError('');
    }
    if (value.length < 8) {
      setPasswordError2('Password must be atleast 9 characters');
    } else {
      setPasswordError2('');
    }
  };
  // Event for submit
  // Event for submit
  const submitsingup = (e) => {
    e.preventDefault();
    const formData = {
      name,
      age,
      nationality,
      gender,
      email,
    };
    console.log('Form Data:', formData);
    setSubmittedData(formData);
    // Check if all required fields are filled and passwords match
  };
// Validate Form
const validate_form = () => {

  if (
    name &&
    age &&
    nationality &&
    gender &&
    email &&
    password &&
    cpassword &&
    password.length >= 8 &&
    password === cpassword
  ) {
    setFormValid(true);
  } else {
    setFormValid(false);
  }
};

  return (
    <div className="overlay">
      <form onSubmit={submitsingup}>
        <div className="con">
          <header className="head-form">
            <h2>Signup</h2>
            <p>Signup here using your details</p>
          </header>
          <br />
          <div className="field-set">
            <span className="input-item">
              <i className="fa fa-user-circle"></i>
            </span>
            <input
              className="form-input"
              id="name-input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                handleNameChange(e);
                // validate_form();
                  }
                }
              required
            />
            <br />
            <span className="input-item">
              <i className="fa fa-user-circle"></i>
            </span>
            <input
              className="form-input"
              id="email-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
              handleEmailChange(e);
              // validate_form();
                }
              }
              required
            />
            <div className="error-container">
              {emailError && <span className="error-msg">{emailError}</span>}
            </div>
            <br />
            <br />
            <Select
              className="form-input"
              id="nationality-input"
              options={countries}
              value={countries.find((country) => country.value === nationality)}
              // onChange={(selectedOption) =>
              //   setNationality(selectedOption.value)
              // }
              onChange= {
                  handleNationalityChange
              } 

              placeholder="Select Nationality"
              required
            />
            <span className="input-item">
              <i className="fa fa-user-circle"></i>
            </span>
            <input
              className="form-input"
              id="age-input"
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => {
                handleAgeChange(e);
                // validate_form();
                  }
                }
              required
            />
            <div className="error-container">
              {ageError && <span className="error-msg">{ageError}</span>}
            </div>
            <br />
            <label htmlFor="gender">Gender</label>
            <div className="radio-group">
              <br />
              <label htmlFor="male">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => {
                    handleGenderChange(e);
                    // validate_form();
                      }
                    }
                />
                Male
              </label>
              <br />
              <label htmlFor="female">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => {
                    handleGenderChange(e);
                    // validate_form();
                      }
                    }                />
                Female
              </label>
              <br />
              <label htmlFor="other">
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  checked={gender === 'other'}
                  onChange={(e) => {
                    handleGenderChange(e);
                    // validate_form();
                      }
                    }                />
                Other
              </label>
            </div>
            <span className="input-item">
              <i className="fa fa-key"></i>
            </span>
            <input
              className="form-input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                handlePasswordChange(e);
                // validate_form();
                  }
                }
              //   onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span>
              <i
                className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                aria-hidden="true"
                type="button"
                id="eye"
                onClick={togglePasswordVisibility}
              ></i>
              <div className="error-container">
                {passwordError1 && (
                  <span className="error-msg">{passwordError1}</span>
                )}
              </div>
            </span>
            <br />
            <span className="input-item">
              <i className="fa fa-key"></i>
            </span>
            <input
              className="form-input"
              type={showPassword2 ? 'text' : 'password'}
              placeholder="Confirm Password"
              id="cpassword"
              name="cpassword"
              value={cpassword}
              onChange={(e) => {
                handlePasswordChange2(e);
                // validate_form();
                  }
                }
              //   onChange={(e) => setCPassword(e.target.value)}
              required
            />
            <span>
              <i
                className={`fa ${showPassword2 ? 'fa-eye-slash' : 'fa-eye'}`}
                aria-hidden="true"
                type="button"
                id="eye"
                onClick={togglePasswordVisibility2}
              ></i>
              <div className="error-container">
                {passwordError && (
                  <span className="error-msg">{passwordError}</span>
                )}
              </div>
              <div className="error-container">
                {passwordError2 && (
                  <span className="error-msg">{passwordError2}</span>
                )}
              </div>
            </span>
            <br />

            <button
              type="submit"
              //   onSubmit={submitsingup}
              className={`btn sign-up ${formValid ? '' : 'disabled'}`}
              disabled={!formValid}            >
              Signup
            </button>
            <br />
            <button className="btn log-in">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;

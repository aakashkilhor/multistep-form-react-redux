import React, { useState, useEffect } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    floorHouseNo: '',
    area: '',
    district: '',
    state: '',
    pincode: '',
    about: '',
  });

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    // Proceed to the next step
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Basic Details</h2>
            <form onSubmit={handleSubmit}>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
              <br />
              <button type="submit">Next</button>
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Contact Info</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Phone Number:
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <br />
              <button type="submit">Next</button>
            </form>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Address</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Floor / House No:
                <input
                  type="text"
                  name="floorHouseNo"
                  value={formData.floorHouseNo}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Area:
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                District:
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                State:
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Pincode:
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </label>
              <br />
              <button type="submit">Next</button>
            </form>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Step 4: About</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Short Description:
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
      <button onClick={() => setStep(step - 1)} disabled={step === 1}>
        Previous
      </button>
    </div>
  );
};

export default MultiStepForm;

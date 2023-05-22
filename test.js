import { useState } from 'react';


const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    // Simple email validation without regex
    const emailParts = email.split('@');
    return (
      emailParts.length === 2 &&
      emailParts[0].length > 0 &&
      emailParts[1].includes('.')
    );
  };
  
  const validateForm = (data) => {
    let errors = {};

    // Add validation rules here
    if (data.name.trim() === '') {
      errors.name = 'Name is required';
    }

    if (validateEmail(data.email)) {
      errors.email = 'Email is invalid';
    }

    if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, do something
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;

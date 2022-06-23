import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const state = {
  firstName: '',
  lastName: '',
  phoneNumber: ''
};

const useForm = validate => {
  const [values, setValues] = useState(state);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validate(values));
  }, [validate, values]);

  const reset = () => {
    setValues(state);
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    values,
    errors,
    reset
  };
};

useForm.propTypes = {
  validate: PropTypes.func.isRequired
};

export default useForm;

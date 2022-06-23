import React from 'react';
import { TextInput, TextInputLabel, TextInputGroup, TextArea, Button } from './styles';
import useForm from '../../hooks/useForm';
import validate from '../../helpers/validate';
import { withUserContext } from '../../context/UserStore';

function LeftPanel(props) {
  const { values, errors, handleChange, reset } = useForm(validate);

  function handleSubmit() {
    const { addNewUser } = props.context;
    Object.values(errors).length === 0 && addNewUser(values, reset);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Data Test App</h1>
      <p>Please complete the form below to continue</p>

      <main style={styles.textInputContainer}>
        <TextInputGroup>
          <TextInputLabel>First Name</TextInputLabel>
          <TextInput
            type="text"
            name="firstName"
            placeholder="eg. John"
            fullWidth
            error={errors.firstName}
            errorMessage={'Must be between 2 and 10 chars'}
            data-test-id="first-name"
            onChange={handleChange}
            value={values.firstName || ''}
          />
        </TextInputGroup>

        <section style={styles.group}>
          <TextInputGroup>
            <TextInputLabel>Middle Name</TextInputLabel>
            <TextInput
              type="text"
              name="middleName"
              placeholder="eg. Kwesi"
              width={190}
              data-test-id="middle-name"
              onChange={handleChange}
              value={values.middleName || ''}
            />
          </TextInputGroup>

          <TextInputGroup>
            <TextInputLabel>Last Name</TextInputLabel>
            <TextInput
              type="text"
              name="lastName"
              placeholder="eg. Doe"
              error={errors.lastName}
              errorMessage={'Must be between 2 and 10 chars'}
              data-test-id="last-name"
              onChange={handleChange}
              value={values.lastName || ''}
            />
          </TextInputGroup>
        </section>

        <TextInputGroup>
          <TextInputLabel>Phone Number</TextInputLabel>
          <TextInput
            type="number"
            name="phoneNumber"
            placeholder="eg. 023-234-2343"
            fullWidth
            error={errors.phoneNumber}
            errorMessage={'Phone number must be 10 digits'}
            data-test-id="phone-number"
            onChange={handleChange}
            value={values.phoneNumber || ''}
          />
        </TextInputGroup>

        <TextInputGroup>
          <TextInputLabel>Date of Birth</TextInputLabel>
          <TextInput
            required
            type="date"
            name="dob"
            placeholder="eg. dd - mm - yy"
            fullWidth
            data-test-id="dob"
            onChange={handleChange}
            value={values.dob || ''}
          />
        </TextInputGroup>

        <TextInputGroup>
          <TextInputLabel>Address</TextInputLabel>
          <TextArea
            name="address"
            placeholder="Enter Address here…"
            fullWidth
            data-test-id="address"
            onChange={handleChange}
            value={values.address || ''}
          />
        </TextInputGroup>
      </main>

      <div>
        <Button type="sumbit" data-test-id="submit-btn" tabIndex="0" onClick={handleSubmit}>
          Add New User
        </Button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '50vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    marginTop: 100
  },
  textInputContainer: {
    width: '60%'
  },
  group: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

export default withUserContext(LeftPanel);

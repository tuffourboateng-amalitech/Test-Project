export default function validate(values) {
  let errors = {};

  if (!!values.firstName && (values.firstName.length < 2 || values.firstName.length > 10)) {
    errors.firstName = true;
  }

  if (!!values.lastName && (values.lastName.length < 2 || values.lastName.length > 10)) {
    errors.lastName = true;
  }

  if (!!values.phoneNumber && values.phoneNumber.length !== 10) {
    errors.phoneNumber = true;
  }

  return errors;
}

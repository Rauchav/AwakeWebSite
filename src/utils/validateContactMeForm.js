export const validateContactMeForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Requiered';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters.';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Requiered';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters.';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    const reg = /^\d+$/;
    if (values.phoneNum.length > 1 && !reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    } else if (values.phoneNum.length > 0 && values.phoneNum.length < 8) {
        errors.phoneNum = 'The phone number should have at least 8 digits.';
    }

    if (!values.email) {
        errors.email = 'Requiered';
    } else if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
};
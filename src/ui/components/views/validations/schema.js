const emailSchema = {
  required: "email is required",
  pattern: {
    value: new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"),
    message: "email is invalid",
  },
};

const passwordSchema = {
  required: "password is required",
  minLength: { value: 5, message: "min. of 5 characters required" },
};

const textFieldSchema = {
  required: "field is required",
  minLength: { value: 5, message: "min. of 5 characters required" },
};

const smallTextFieldSchema = {
  required: "field is required",
  minLength: { value: 3, message: "min. of 3 characters required" },
};

const numberFieldSchema = {
  required: "field is required",
  minLength: { value: 3, message: "min. of 3 numbers required" },
  maxLength: { value: 20, message: "min. of 20 numbers required" },
};

const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

const accountNumberSchema = {
  required: "account number is required",
  minLength: { value: 10, message: "min. of 10 numbers required" },
  maxLength: { value: 10, message: "max. of 10 numbers required" },
};

export {
  emailSchema,
  passwordSchema,
  textFieldSchema,
  smallTextFieldSchema,
  isEmpty,
  accountNumberSchema,
  numberFieldSchema,
};

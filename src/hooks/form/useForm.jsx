import React from 'react';

const types = {
    "email": {
        regexp: /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/ ,
        error: "preencha um e-mail válido"
    },
    "user": {
        regexp: /^[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]*$/,
        error: "preencha um nome de usuário válido"
    },
    "password": {
        regexp: /^.{3,}$/,
        error: "a senha deve conter 3 ou mais caracteres"
    }
}
const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');
  
  function onChange({ target }) {
    if(error) {
        validate(target.value);
    }
    setValue(target.value);
  }
  function onBlur() {
    validate(value);
  }
  function validate(text) {
    if(text.length === 0) {
        setError("O campo não pode ser vazio");
        return false;
    }
    else if(!types[type].regexp.test(text)) {
        setError(`Ops, ${types[type].error}`);
        return false;
    }
    else {
        setError("");
        return true;
    }
  }
  return { value, error, onBlur, onChange, validate: () => validate(value) };
}

export default useForm;
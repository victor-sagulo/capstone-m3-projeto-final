import { InputContainer } from "./style";

const Input = ({ register, name, label, error, ...rest }) => {
  return (

    <InputContainer>
      <label>{label}</label>
      <input {...register(name)} {...rest} />
      <div>{!!error && <span>{error}</span>}</div>
    </InputContainer>

  );
};

export default Input;

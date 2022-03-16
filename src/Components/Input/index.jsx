const Input = ({ register, name, label, error, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...register(name)} {...rest} />
      <div>{!!error && <span>{error}</span>}</div>
    </div>
  );
};

export default Input;

const Input = ({
  fname,
  surname,
  color,
  style,
  placeholder,
  email,
  age,
  favoriteColor,
  id,
  radio,
  inputValues,
  handleFnd,
  handleSurname,
  handleFavColor,
  handleEmail,
  handleAge,
  handleRadio,
  handleCheckbox,
  checked,
  clearCheck,
}) => {
  const InputValue = [
    inputValues.fnd,
    inputValues.lastName,
    inputValues.favColor,
    inputValues.ageValue,
    inputValues.message,
    inputValues.radioValue,
    inputValues.checkboxValue,
  ];

  console.log(
    inputValues.fnd,
    inputValues.lastName,
    inputValues.favColor,
    inputValues.ageValue,
    inputValues.message,
    inputValues.checkboxValue,
    inputValues.radioValue
  );

  console.log(InputValue, "btnInputtest", !InputValue ? true : false);

  return (
    <div>
      <label
        htmlFor='name'
        style={{
          color: `${color}`,
        }}
      >
        {fname}{" "}
        <input
          type='text'
          required
          placeholder={placeholder.fname}
          id={id.fname}
          onChange={handleFnd}
          value={inputValues.fnd}
          style={{
            width: `${style.width}`,
            padding: `${style.padding}`,
            borderRadius: `${style.borderRadius}`,
            border: `${style.border}`,
            margin: `${style.margin}`,
          }}
        />
      </label>
      <br />
      <label
        htmlFor='surname'
        style={{
          color: `${color}`,
        }}
      >
        {surname}{" "}
        <input
          type='text'
          required
          placeholder={placeholder.surname}
          id={id.surname}
          onChange={handleSurname}
          value={inputValues.lastName}
          style={{
            width: `${style.width}`,
            padding: `${style.padding}`,
            borderRadius: `${style.borderRadius}`,
            border: `${style.border}`,
            margin: `${style.margin}`,
          }}
        />
      </label>
      <br />
      <label
        htmlFor='email'
        style={{
          color: `${color}`,
        }}
      >
        {email}{" "}
        <input
          type='text'
          required
          placeholder={placeholder.email}
          id={id.email}
          onChange={handleEmail}
          value={inputValues.message}
          style={{
            width: `${style.width}`,
            padding: `${style.padding}`,
            borderRadius: `${style.borderRadius}`,
            border: `${style.border}`,
            margin: `${style.margin}`,
            ...(inputValues.error
              ? { outlineColor: "red" }
              : { outlineColor: "black" }),
          }}
        />
      </label>
      {inputValues.error && (
        <p style={{ color: "red", fontSize: "15px" }}>{inputValues.error}</p>
      )}
      <br />
      <label
        htmlFor='age'
        style={{
          color: `${color}`,
        }}
      >
        {age}{" "}
        <input
          type='text'
          required
          placeholder={placeholder.age}
          id={id.age}
          value={inputValues.ageValue}
          onChange={handleAge}
          maxLength={3}
          style={{
            width: `${style.width}`,
            padding: `${style.padding}`,
            borderRadius: `${style.borderRadius}`,
            border: `${style.border}`,
            margin: `${style.margin}`,
            ...(inputValues.ageError
              ? { outlineColor: "red" }
              : { outlineColor: "black" }),
          }}
        />
      </label>
      {inputValues.ageError && (
        <p style={{ color: "red", fontSize: "15px" }}>{inputValues.ageError}</p>
      )}
      <br />
      <label
        htmlFor='favC'
        style={{
          color: `${color}`,
          textAlign: "right",
        }}
      >
        {favoriteColor}{" "}
        <input
          type='text'
          required
          placeholder={placeholder.favoriteColor}
          id={id.favoriteColor}
          onChange={handleFavColor}
          value={inputValues.favColor}
          style={{
            width: `${style.width}`,
            padding: `${style.padding}`,
            borderRadius: `${style.borderRadius}`,
            border: `${style.border}`,
            margin: `${style.margin}`,
          }}
        />
      </label>
      <br />
      <div className='radio' id='radio'>
        {" "}
        <label
          htmlFor='radio'
          style={{
            color: `${color}`,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "110px",
          }}
        >
          <input
            type='radio'
            name='male'
            id={radio.male}
            required
            onChange={(e) => {
              handleRadio(e);
              clearCheck();
            }}
            value={inputValues.radioValue || ""}
            checked={checked}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          {radio.male}
        </label>
        <br />
        <label
          htmlFor='radio'
          style={{
            color: `${color}`,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "25px",
          }}
        >
          <input
            type='radio'
            name='male'
            id={radio.female}
            required
            onChange={(e) => {
              handleRadio(e);
              clearCheck();
            }}
            value={inputValues.radioValue || ""}
            checked={checked}
          />
          {radio.female}
        </label>
      </div>
      <br />
      <label
        htmlFor='checkbox'
        style={{
          color: `${color}`,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "20px",
        }}
      >
        <input
          type='checkbox'
          name='checkbox'
          id='checkbox'
          required
          onChange={(e) => {
            handleCheckbox(e);
            clearCheck();
          }}
          value={inputValues.checkboxValue || ""}
          checked={checked}
        />
        <p className='text'>Would you like to receive notifications?</p>
      </label>
    </div>
  );
};

export default Input;

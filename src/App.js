import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const bgColor = "#FFA07A";

  const [inputValues, setinputValues] = useState({
    fnd: "",
    lastName: "",
    favColor: "",
    message: "",
    error: null,
    ageValue: "",
    ageError: null,
    radioValue: "",
    checkboxValue: "",
  });

  const handleFnd = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, "");
    setinputValues({
      ...inputValues,
      fnd: result,
    });
  };

  const handleSurname = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, "");
    setinputValues({
      ...inputValues,
      lastName: result,
    });
  };

  const handleFavColor = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, "");
    setinputValues({
      ...inputValues,
      favColor: result,
    });
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmail = (e) => {
    const result = e.target.value;
    if (!isValidEmail(result)) {
      setinputValues({
        ...inputValues,
        error: "Email is invalid",
        message: result,
      });
    } else {
      setinputValues({ ...inputValues, message: result, error: null });
    }
  };

  const handleAge = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    if (result > 0 && result < 100) {
      setinputValues({ ...inputValues, ageValue: result, ageError: null });
    } else {
      setinputValues({
        ...inputValues,
        ageValue: "",
        ageError: "Only numbers between 1 and 100 are allowed",
      });
    }
  };

  const handleRadio = (e) => {
    setinputValues({ ...inputValues, radioValue: e.target.id });
  };

  const handleCheckbox = (e) => {
    setinputValues({ ...inputValues, checkboxValue: "notifications: yes" });
  };

  const fieldsCheck =
    inputValues.fnd !== "" &&
    inputValues.lastName !== "" &&
    inputValues.message !== "" &&
    isValidEmail(inputValues.message) &&
    inputValues.ageValue !== "" &&
    inputValues.favColor !== "" &&
    inputValues.radioValue !== "" &&
    inputValues.checkboxValue !== "";

  // submit button function
  const [disabled, setDisabled] = useState(true);
  const [isShown, setIsShown] = useState(false);

  const submitBtn = (e) => {
    e.preventDefault();
    setIsShown(true);
    const dataList = JSON.parse(localStorage.getItem("dataList") || "[]");

    const dataStore = {
      fnd: inputValues.fnd,
      lastName: inputValues.lastName,
      favColor: inputValues.favColor,
      message: isValidEmail(inputValues.message) ? inputValues.message : "",
      ageValue: inputValues.ageValue,
      radioValue: inputValues.radioValue,
      checkboxValue: inputValues.checkboxValue,
    };

    if (dataList.indexOf(dataStore) === -1) {
      dataList.push(dataStore);
      localStorage.setItem("dataList", JSON.stringify(dataList));
    }
    setinputValues({
      fnd: "",
      lastName: "",
      favColor: "",
      ageValue: "",
      message: "",
      radioValue: "",
      checkboxValue: "",
    });

    if (!fieldsCheck) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    Ischecked(false);
  };

  const [checked, Ischecked] = useState(false);

  const cancelBtn = (e) => {
    e.preventDefault();
    setinputValues({
      fnd: "",
      lastName: "",
      favColor: "",
      ageValue: "",
      message: "",
      radioValue: "",
      checkboxValue: "",
    });
    setDisabled(true);
    Ischecked(false);
  };

  const clearCheck = () => {
    if (!fieldsCheck) {
      Ischecked(false);
    } else {
      Ischecked(true);
    }
  };

  console.log(
    "check",
    inputValues.fnd,
    inputValues.lastName,
    inputValues.favColor,
    inputValues.message,
    inputValues.ageValue,
    inputValues.radioValue,
    inputValues.checkboxValue,
    isValidEmail()
  );

  return (
    <div className='App'>
      <Card
        bgColor={bgColor}
        inputValues={{
          fnd: inputValues.fnd,
          lastName: inputValues.lastName,
          favColor: inputValues.favColor,
          message: inputValues.message,
          error: inputValues.error,
          ageValue: inputValues.ageValue,
          ageError: inputValues.ageError,
          radioValue: inputValues.radioValue,
          checkboxValue: inputValues.checkboxValue,
        }}
        handleFnd={handleFnd}
        handleSurname={handleSurname}
        handleFavColor={handleFavColor}
        handleEmail={handleEmail}
        handleAge={handleAge}
        handleRadio={handleRadio}
        handleCheckbox={handleCheckbox}
        submitBtn={submitBtn}
        disabled={disabled}
        cancelBtn={cancelBtn}
        checked={checked}
        isShown={isShown}
        fieldsCheck={fieldsCheck}
        clearCheck={clearCheck}
      />
    </div>
  );
}

export default App;

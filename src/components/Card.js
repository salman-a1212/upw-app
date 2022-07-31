import React from "react";
import Button from "./Button";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Input from "./Input";
import FormData from "./FormData";

const Card = ({
  bgColor,
  inputValues,
  handleFnd,
  handleSurname,
  handleFavColor,
  handleEmail,
  handleAge,
  handleRadio,
  handleCheckbox,
  submitBtn,
  disabled,
  cancelBtn,
  checked,
  isShown,
  fieldsCheck,
  clearCheck,
}) => {
  const placeHolder = {
    fname: "Your first name",
    surname: "Your last name",
    email: "Your email address",
    age: "Your age",
    favoriteColor: "Your favorite color",
  };
  const id = {
    fname: "fname",
    surname: "surname",
    email: "email",
    age: "age",
    favoriteColor: "favoriteColor",
  };
  const radio = { male: "Male", female: "Female" };

  const butId = { subtext: "Submit", cantext: "Cancel" };

  return (
    <>
      <div
        style={{
          border: "1px solid #ddd",
          width: "500px",
          height: "1000px",
          backgroundColor: `${bgColor}`,
          borderRadius: "3%",
        }}
      >
        <form action='' style={{ margin: "5px" }}>
          <Header
            header='Form Validation'
            style={{ fontSize: "35px", margin: "50px", color: "#eee" }}
          />
          <SubHeader
            subheader='Without Any Library'
            style={{ fontSize: "22px", margin: "50px", color: "#eee" }}
          />
          <Input
            fname='Name'
            color='#eee'
            style={{
              width: "80%",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              margin: "10px",
            }}
            surname='Surname'
            placeholder={placeHolder}
            email='Email'
            age='Age'
            favoriteColor='Favorite Color'
            id={id}
            radio={radio}
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
            checked={checked}
            cancelBtn={cancelBtn}
            clearCheck={clearCheck}
            fieldsCheck={fieldsCheck}
          />
          <Button
            subtext='Submit'
            subcolor='#F9E79F'
            subbackgroundColor='#52BE80'
            subpadding='10px'
            cantext='Cancel'
            cancolor='#fff'
            canbackgroundColor='#E74C3C'
            canpadding='10px'
            butId={butId}
            submitBtn={submitBtn}
            disabled={disabled}
            cancelBtn={cancelBtn}
            checked={checked}
            fieldsCheck={fieldsCheck}
            clearCheck={clearCheck}
          />
        </form>
      </div>
      {isShown && (
        <FormData
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
          fname='Name'
          surname='Surname'
          email='Email'
          age='Age'
          favoriteColor='Favorite Color'
          radio={radio}
        />
      )}
    </>
  );
};

export default Card;

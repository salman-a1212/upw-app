const Button = ({
  subtext,
  subcolor,
  subbackgroundColor,
  subpadding,
  cantext,
  cancolor,
  canbackgroundColor,
  canpadding,
  butId,
  submitBtn,
  disabled,
  cancelBtn,
  fieldsCheck,
}) => {
  return (
    <div>
      <button
        type='submit'
        style={{
          color: `${cancolor}`,
          backgroundColor: `${canbackgroundColor}`,
          padding: `${canpadding}`,
          border: "1px solid #fff",
          cursor: "pointer",
          borderRadius: "5px",
          margin: "50px",
          width: "20%",
        }}
        id={butId.cantext}
        onClick={cancelBtn}
      >
        {cantext}
      </button>

      <button
        type='submit'
        style={{
          color: `${disabled ? "red" : subcolor}`,
          backgroundColor: `${disabled ? "#eee" : subbackgroundColor}`,
          padding: `${subpadding}`,
          border: "1px solid #fff",
          cursor: `${disabled ? "not-allowed" : "pointer"}`,
          borderRadius: "5px",
          margin: "25px",
          width: "20%",
        }}
        id={butId.subtext}
        onClick={submitBtn}
        disabled={!fieldsCheck}
      >
        {subtext}
      </button>
    </div>
  );
};

export default Button;

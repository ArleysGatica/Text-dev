import "./input.css";
import React, { useState, useEffect } from "react";

export const Input = (props) => {
  const {
    error = false,
    disabled = false,
    fullWidth = false,
    helperText = "",
    value = "",
    size = "",
    multiline = false,
    rows = 0,
  } = props;
  const [focus, setFocus] = useState(false);
  const [valueI, setvalueI] = useState(value);
  const [focusC, setFocusC] = useState("");
  const [hover, setHover] = useState(false);
  const [hoverC, setHoverC] = useState("");
  const [errorC, setErrorC] = useState("");
  const [fullWidthC, setFullWidthC] = useState("");

  const handlerFocusChange = () => {
    setFocus(!focus);
  };

  const handlerHoverChange = () => {
    setHover(!hover);
  };

  const handleInputChange = (evt) => {
    setvalueI(evt.target.value);
  };

  useEffect(() => {
    if (focus) {
      setFocusC("focus");
    } else {
      setFocusC("");
    }
    if (error) {
      setErrorC("error");
    }
    if (hover) {
      setHoverC("hover");
    } else {
      setHoverC("");
    }
    if (fullWidth) {
      setFullWidthC("fullWidth");
    }
  }, [error, focus, hover, fullWidth]);

  return (
    <div
      className={`containerInput ${fullWidthC} ${hoverC} ${focusC} ${errorC} ${size}`}
    >
      <p>Label</p>
      {multiline ? (
        <textarea
          onChange={handleInputChange}
          disabled={disabled}
          onMouseEnter={handlerHoverChange}
          onMouseLeave={handlerHoverChange}
          onFocus={handlerFocusChange}
          onBlur={handlerFocusChange}
          placeholder="Placeholder"
          rows={rows}
        >
          {valueI}
        </textarea>
      ) : (
        <input
          onChange={handleInputChange}
          disabled={disabled}
          onMouseEnter={handlerHoverChange}
          onMouseLeave={handlerHoverChange}
          onFocus={handlerFocusChange}
          onBlur={handlerFocusChange}
          placeholder="Placeholder"
          type="text"
          value={valueI}
        />
      )}

      {helperText === "" ? null : <p>{helperText}</p>}
    </div>
  );
};

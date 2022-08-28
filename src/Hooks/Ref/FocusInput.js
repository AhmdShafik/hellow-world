import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    //Focus Input Field
    inputRef.current.focus();
  });
  return <div><input ref={inputRef} type='text' /></div>;
}

export default FocusInput;

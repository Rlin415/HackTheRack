import * as React from "react";
import "whatwg-fetch";

const SignUpForm = () => {
  let input: HTMLInputElement;

  function handleClick() {
    fetch("/api/signup", {
      method: "POST",
      body: input.value
    });
  }

  return (
    <div>
      <label>
        Email:
        <input ref={(node) => input = node} type="email" name="email"></input>
      </label>
      <button type="submit" onClick={handleClick}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUpForm;

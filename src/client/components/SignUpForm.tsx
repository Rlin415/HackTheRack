import * as React from "react";
import { ReactElement } from "react";
import "whatwg-fetch";

function status(res: Response): void {
  if (!res.ok) throw res.statusText;
}

const SignUpForm = (): ReactElement<HTMLFormElement> => {
  let input: HTMLInputElement;

  function handleClick(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!input.value.trim()) return alert("Must provide email!");
    fetch("/api/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: input.value })
    })
    .then(status)
    .catch((err: Error) => console.error('Request failed:', err));
  }

  return (
    <form onSubmit={handleClick}>
      <label>
        Email:
        <input ref={(node: HTMLInputElement) => input = node} type="email" name="email"></input>
      </label>
      <button type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;

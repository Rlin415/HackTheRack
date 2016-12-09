import * as React from "react";
import { ReactElement } from "react";
import SignUpForm from "./SignUpForm";

const App = (): ReactElement<HTMLDivElement> => (
  <div>
    <h1>Get notifed about new items!</h1>
    <SignUpForm />
  </div>
);

export default App;

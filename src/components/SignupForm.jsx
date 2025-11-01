import { Form } from "react-router-dom";

function SignupForm() {
  return <Form> Sign up</Form>;
}

async function action({ request }) {
  let userData = await request.formData();
  let x = Object.fromEntries(userData);
  return x;
}

export default SignupForm;

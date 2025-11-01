import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import formImage from "../../public/formImage.jpg";

function Login() {
  const error = useActionData();
  const navigation = useNavigation();
  const submissionStatus = navigation.state === "loading";

  return (
    <section className="bg-red-500 h-dvh md:flex items-center">
      <div className="hidden md:block w-2/4">
        <img src={formImage} alt="" />
      </div>
      <Form
        action=""
        method="POST"
        className="flex flex-col gap-4 bg-blue-600 w-2/4 h-fit"
      >
        <div className="w-full rounded-xl overflow-hidden">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            className="w-full px-4 py-2"
          />
        </div>
        <div className="w-full rounded-xl overflow-hidden">
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2"
            id="password"
            placeholder="Enter password..."
          />
        </div>
        {error && <p className="text-red-600 text-sm">{error.message}</p>}
        <button disabled={submissionStatus}>Login</button>
      </Form>
    </section>
  );
}

async function action({ request }) {
  const data = await request.formData();
  const userData = Object.fromEntries(data);

  let errors = {};

  if (Object.keys(userData).length < 2) return errors;

  // send userdata below to the database using POST in axios, fetch
  //   userData;
  return redirect("/dashboard");
}

export default Login;

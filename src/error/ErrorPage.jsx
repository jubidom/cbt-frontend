import { Link, useNavigate } from "react-router-dom";

function ErrorPage() {
  //   const navigate = useNavigate();
  return (
    <section>
      <Link to="/">Home</Link>
      <p>Sorry, your request failed</p>
    </section>
  );
}

export default ErrorPage;

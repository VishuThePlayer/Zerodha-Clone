import Navbar from "../Navbar";
import Footer from "../Footer";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <>
      <Navbar />

      {/* HERO / HEADLINE */}
      <section className="py-5 bg-light border-bottom">
        <div className="container">
          <h1 className="text-center fw-semibold">
            Login to your trading account
          </h1>
          <p className="text-center text-muted mt-2">
            Access your portfolio, manage your trades, and continue your investing journey.
          </p>
        </div>
      </section>

      {/* LOGIN FORM */}
      <LoginForm />

      {/* CTA */}
      <section className="py-5">
        <div className="container text-center">
          <h2>New here?</h2>
          <h3 className="h5 text-muted">
            Open a free demat and trading account today.
          </h3>
          <div className="mt-3">
            <a href="/signup" className="btn btn-primary">
              Signup for fre
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;

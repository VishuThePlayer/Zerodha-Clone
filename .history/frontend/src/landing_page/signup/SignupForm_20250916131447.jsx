import React from 'react'

function SignupForm() {
    return (  
        <>
            {/* SIGNUP SPLIT */}
            <section className="py-5">
                <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 text-center">
                    <img
                        src="https://zerodha.com/static/images/account_open.svg"
                        alt="Open account"
                        className="img-fluid"
                    />
                    </div>
                    <div className="col-lg-6">
                    <h2 className="h4 mb-1">Signup now</h2>
                    <small className="text-muted d-block mb-3">
                        Or track your existing application
                    </small>

                    

                    {/* form */}
                    <form className="needs-validation" noValidate>
                        
                            <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-black">Username</label>
                                <div class="mt-2">
                                    <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                                    <div class="shrink-0 text-base text-gray-400 select-none sm:text-sm/6">workcation.com/</div>
                                    <input id="username" type="text" name="username" placeholder="janesmith" class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                                    </div>
                                </div>
                            </div>
                        <div className="input-group input-group-lg mb-2">
                            <span className="input-group-text">
                                <img
                                src="https://zerodha.com/static/images/india-flag.svg"
                                alt="India"
                                height="16"
                                className="me-1"
                                />
                                +91
                            </span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter your mobile number"
                                min="1000000000"
                                max="9999999999"
                                required
                            />
                            </div>
                            <div className="d-grid">
                            <button type="submit" className="btn btn-primary btn-lg">
                                Get OTP
                            </button>
                        </div>
                    </form>

                    <p className="text-muted small mt-3">
                        By proceeding, you agree to the Zerodha{" "}
                        <a
                        href="https://zerodha.com/terms-and-conditions"
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none"
                        >
                        terms
                        </a>{" "}
                        &amp;{" "}
                        <a
                        href="https://zerodha.com/privacy-policy"
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none"
                        >
                        privacy policy
                        </a>
                    </p>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
}

export default SignupForm;
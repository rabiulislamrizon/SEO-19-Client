import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../components/Shared/Loading";
import HeaderBottom from "../components/HomePage/HeaderBottom";

const Register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const getFirebaseErrorMessage = (error) => {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'This email is already in use.';
      case 'auth/invalid-email':
        return 'The email address is invalid.';
      case 'auth/operation-not-allowed':
        return 'Operation not allowed.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters.';
      default:
        return 'An error occurred. Please try again.';
    }
  };

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
      console.log("Update done");

      if (auth.currentUser) {
        navigate("/dashboard");
      } else {
        throw new Error("User registration failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading || gLoading || updating) {
    return <Loading />;
  }

  const signInError = (error || gError || updateError) && (
    <p className="text-center text-warning">
      <small>
        {getFirebaseErrorMessage(error || gError || updateError)}
      </small>
    </p>
  );

  return (
    <>
      <HeaderBottom />
      <div
        className="main-content payment-setting mt-100 mb-5"
        data-aos="fade-up"
        data-aos-duration={2000}
      >
        <div className="page-content">
          <section className="bg-auth">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div
                    className="card auth-box mb-15"
                    style={{ background: "#35344c" }}
                  >
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="auth-content card-body p-5 h-100 bg-primary text-white">
                          <div className="w-100">
                            <div className="text-center mb-4">
                              <h2 className="text-white">Welcome!</h2>
                              <p className="text-white">
                                Register to continue
                              </p>
                            </div>
                            <form
                              onSubmit={handleSubmit(onSubmit)}
                              className="auth-form"
                            >
                              <div className="mb-3">
                                <label
                                  htmlFor="usernameInput"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="usernameInput"
                                  placeholder="Enter your Email"
                                  {...register("email", {
                                    required: {
                                      value: true,
                                      message: "Email is Required",
                                    },
                                    pattern: {
                                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                      message: "Provide a Valid Email",
                                    },
                                  })}
                                />
                                <label className="label">
                                  {errors.email?.type === "required" &&
                                    errors.email.message}
                                  {errors.email?.type === "pattern" &&
                                    errors.email.message}
                                </label>
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="passwordInput"
                                  className="form-label"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="passwordInput"
                                  placeholder="Enter your password"
                                  {...register("password", {
                                    required: {
                                      value: true,
                                      message: "Password is Required",
                                    },
                                    minLength: {
                                      value: 6,
                                      message: "Minimum 6 Characters",
                                    },
                                  })}
                                />
                                <label className="label">
                                  {errors.password?.type === "required" &&
                                    errors.password.message}
                                  {errors.password?.type === "minLength" &&
                                    errors.password.message}
                                </label>
                              </div>

                              <div className="text-center">
                                <button
                                  type="submit"
                                  className="btn default-btn tra-white-hover text-center"
                                >
                                  <span> Register</span>
                                </button>
                              </div>
                            </form>
                            {signInError}
                            <div className="mt-4 text-center">
                              <p className="mb-0 text-white">
                                Have an account?{" "}
                                <Link
                                  to="/login"
                                  className="fw-medium text-white text-decoration-underline"
                                >
                                  {" "}
                                  Login Now{" "}
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 bg-primary text-center">
                        <div className="card-body p-4">
                          <div className="mt-5">
                            <img
                              src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg"
                              alt=""
                              className="img-fluid login__img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Register;

import React, {useState} from "react";
import axios from "axios";
import Config from "../assets/configs/configs.json";
import {useForm} from "react-hook-form";

const Signin = ({signin, signup}) => {
  const [resError, setResError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({mode: "all"});

  const handleSignUp = async (event) => {
    const {name, phoneNumber, role, email, password} = event;
    const data = {name, phoneNumber, role, email, password};

    try {
      await axios.post(`${Config.BACKEND_URL}/api/v1/auth/register`, data);
      window.location.assign("/");
    } catch (error) {
      console.error(error);
      handleShowResError(error.response.data.error);
    }
  };

  const handleSignIn = async (event) => {
    const {email, password} = event;
    const data = {email, password};

    try {
      const res = await axios.post(
        `${Config.BACKEND_URL}/api/v1/auth/login`,
        data,
        {
          withCredentials: true,
        }
      );

      const user_id = res.data._id;
      const username = res.data.name;
      const token = res.data.token;

      localStorage.setItem("user_id", user_id);
      localStorage.setItem("username", username);
      localStorage.setItem("token", token);

      window.location.assign("/bot");
    } catch (error) {
      console.error(error);
      handleShowResError(
        error?.response?.data?.error
          ? error.response.data.error
          : "username or password is invalid"
      );
    }
  };

  const handleShowResError = (text) => {
    setResError(text);
    setTimeout(() => {
      setResError("");
    }, 3000);
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>{signup ? "Create New Account" : "Sign in"}</h2>
        <form
          onSubmit={handleSubmit(signup ? handleSignUp : handleSignIn)}
          className="signin-form"
        >
          {signup && (
            <>
              <label>Name</label>
              <input
                id="name"
                className={errors.name ? "error-validate" : ""}
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name?.message && (
                <span className="error">{errors.name?.message}</span>
              )}
              <label>Phone Number</label>
              <input
                id="phoneNumber"
                className={errors.phoneNumber ? "error-validate" : ""}
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^$|^[0-9]{10}$/i,
                    message: "Please enter a valid phoneNumber",
                  },
                })}
              />
              {errors.phoneNumber?.message && (
                <span className="error">{errors.phoneNumber?.message}</span>
              )}
              <label>Role</label>
              <input
                id="role"
                className={errors.role ? "error-validate" : ""}
                {...register("role", {
                  required: "role is required",
                })}
              />
              {errors.role?.message && (
                <span className="error">{errors.role?.message}</span>
              )}
            </>
          )}
          <label>Email address</label>
          <input
            id="email"
            type="email"
            className={errors.email ? "error-validate" : ""}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email?.message && (
            <span className="error">{errors.email?.message}</span>
          )}
          <label>Password</label>
          <input
            id="password"
            type="password"
            className={errors.password ? "error-validate" : ""}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: signup ? 8 : 0,
                message: "Password required 8 characters",
              },
            })}
          />
          {errors.password?.message && (
            <span className="error">{errors.password?.message}</span>
          )}
          {signup && (
            <>
              <label>Confirm password</label>
              <input
                id="confirmPassword"
                type="password"
                className={errors.confirmPassword ? "error-validate" : ""}
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (val) => {
                    if (watch("password") !== val) {
                      return "Passwords do not match";
                    }
                  },
                })}
              />
              {errors.confirmPassword?.message && (
                <span className="error">{errors.confirmPassword?.message}</span>
              )}
            </>
          )}

          <button type="submit">{signup ? "Get Started" : "Sign in"}</button>
          {resError && <span className="error">{resError}</span>}
        </form>
      </div>
    </div>
  );
};

export default Signin;

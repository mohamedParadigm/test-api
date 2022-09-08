// Internals
import { useState } from "react";
import fetcher from "../lib/fetcher";
import useUser from "../lib/useUser";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleUserInfoChange = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const { mutateUser } = useUser({ redirectTo: "/", redirectIfFound: true });

  const handleSignupSubmit = async (e) => {
    // m.hasan@paradigmegypt.com
    // 123123
    e.preventDefault();
    const { email, password } = userInfo;

    try {
      mutateUser(
        await fetcher(`/api/user/login?email=${email}&password=${password}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
      );
    } catch (error) {
      console.error("An unexpected error happened:", error);
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSignupSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={userInfo.email}
        onChange={handleUserInfoChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={userInfo.password}
        onChange={handleUserInfoChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignIn;

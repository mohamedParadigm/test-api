// Internals
import { useState } from "react";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleUserInfoChange = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      ...userInfo,
      birthdate: "",
      gender: "",
      Country: 12,
      SubscribedMarketing: "False",
      SubscribedNotifications: "False",
    };

    try {
      const res = await fetch(
        "/api/signup",
        {
          method: "POST",
          body: JSON.stringify(userData),
        }
      );

      const resJson = await res.json();

      console.log("Response Success ", resJson);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSignupSubmit}>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
        value={userInfo.firstName}
        onChange={handleUserInfoChange}
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        value={userInfo.lastName}
        onChange={handleUserInfoChange}
      />
      <input
        type="text"
        name="mobile"
        id="mobile"
        placeholder="Mobile"
        value={userInfo.mobile}
        onChange={handleUserInfoChange}
      />
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

export default Register;

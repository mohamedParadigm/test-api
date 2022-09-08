import { withIronSessionApiRoute } from "iron-session/next";

const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "userData",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

const withSession = (handler) => {
  return withIronSessionApiRoute(handler, sessionOptions);
};

export default withSession;

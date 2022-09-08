import fetcher from "../../../lib/fetcher";
import withSession from "../../../lib/session";

export default withSession(async (req, res) => {
  const email = await req.query.email;
  const password = await req.query.password;

  const url = `${process.env.API_URL}/api/V5/User/${process.env.LANG}/Login?email=${email}&password=${password}&DeviceToken=123456456456`;

  try {
    const {
      Results: {
        Token: token,
        FisrtName: firstName,
        LastName: lastName,
        Email: email,
        Phone: phone,
      },
    } = await fetcher(url);

    const user = { isLoggedIn: true, token, firstName, lastName, email, phone };

    req.session.user = user;
    await req.session.save();
    res.json(user);

  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});

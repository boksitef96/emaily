// module.exports = {
//   googlClientID: '711360778714-23n37jikfml98f66m2eqt75m2dfb2jsd.apps.googleusercontent.com',
//   googleClientSecret: 'vrrMFXrbNFkeLnXzw-wgisIS',
//   mongoURI: 'mongodb://bokistef96:boki1000@ds211504.mlab.com:11504/bokistef96-emaily-prod',
//   cookieKey: '123456789987654321',
// };

module.exports = {
  googlClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
};

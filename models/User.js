module.exports = {
  name: String,
  email: String,
  password: String,
  role: { type: String, default: 'student' },
  image: String
};
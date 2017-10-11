import axios from 'axios';

const API_URL = 'http://localhost:8000';
const LOGIN_URL = `${API_URL}/rest-auth/login/`;
// const SIGNUP_URL = API_URL + '/auth-rest-signup';

export default {
  user: {
    authenticated: false,
  },
  login(context, redirect) {
    axios.post(LOGIN_URL, {
      email: context.credentials.loginEmail,
      password: context.credentials.loginPassword,
    })
      .then(function (response) {
        localStorage.setItem('token', response.data.key);
        localStorage.setItem('authenticated', true);
        this.user.authenticated = true;
        self.user.authenticated = true;
        if (!redirect) {
          this.$router.push('home');
        }
      })
      .catch(function (err) {
        this.$router.push('home', err);
      });
  },
  isAuthenticated() {
    return this.user.authenticated;
  },
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('authenticated');
    this.user.authenticated = false;
  },
};

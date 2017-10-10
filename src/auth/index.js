import Router from 'vue-router';
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
        localStorage.setItem('access_token', response.data.key);
        this.user.authenticated = true;

        if (redirect) {
          Router.go(redirect);
        }
      })
      .catch(function () {
        Router.go('home', this.error);
      });
  },
};

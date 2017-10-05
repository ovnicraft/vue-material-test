<template>
  <main class="mdl-layout__content">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <h4>Login</h4>
      </div>
      <div class="mdl-cell mdl-cell--12-col mdl-grid mdl-grid--no-spacing">
        <form id="form-login" action="" method="post" >

          <div class="mdl-cell mdl-cell--12-col">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input name="email" class="mdl-textfield__input" id="email" />
              <label class="mdl-textfield__label" for="email">Email</label>
            </div>
            <div id="emailError" class="login-error"></div>
          </div>

          <div class="mdl-cell mdl-cell--12-col">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input name="password" id="password" class="mdl-textfield__input" type="password"/>
              <label class="mdl-textfield__label" for="password">Password</label>
            </div>
            <div id="passwordError" class="login-error"></div>
          </div>

          <div class="mdl-cell mdl-cell--12-col">
            <button id="login" type="submit" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored">
              Login
            </button>
            <button id="forgot" type="button" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised">
              Forgot Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>

</template>

<script>
export default {
  name: 'login',
};
</script>

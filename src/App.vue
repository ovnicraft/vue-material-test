<template>

  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title" > FleeApp</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation. We hide it in small screens. -->
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <router-link class="mdl-navigation__link" to="/" >Home</router-link>
          <router-link class="mdl-navigation__link" to="/about">About</router-link>
          <a class="mdl-navigation__link" href="">Perfil</a>
          <router-link class="mdl-navigation__link" to="/login">Ingresar</router-link>
          <a class="mdl-navigation__link" href="">Salir</a>
          <router-view</router-view>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">FleeApp</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" >Home</router-link>
        <a class="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>

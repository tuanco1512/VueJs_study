<template>
  <div class="page">
    <div class="nav">
      <ul>
        <li><nuxt-link to="/settings">General</nuxt-link></li>
        <li><nuxt-link to="/settings/deck">Deck</nuxt-link></li>
        <li><nuxt-link to="/settings/scheduele">Schedueled</nuxt-link></li>
      </ul>
    </div>
    <nuxt-child />
  </div>
</template>


<style>
.page {
  display: flex;
}
.page .main {
  margin-left: 3rem;
}
</style>
<template>
  <header>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/decks">Decks</nuxt-link></li>
        <li><nuxt-link to="/profile">Profile</nuxt-link></li>
        <li><nuxt-link to="/settings">Setting</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style>
header {
  background: #000;
  color: #fff;
  height: 60px;
}

header ul {
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

header ul li {
  margin: 0 1.5rem;
}

header ul li a {
    color: #fff;
    text-decoration: none;
}

header ul li a:hover{
    text-decoration: underline;
}

header nav, header ul {
    height: inherit;
}
</style>
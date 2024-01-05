<template>
  <div>
    <h1>Your decks, please enter number of deck to show:</h1>
    <input type="text" v-model="deckID" placeholder="please enter deckID" />
    <button @click="showDeck">Go to Deck</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deckID: "1",
    };
  },
  methods: {
    showDeck() {
    //   this.$router.push("/decks/" + this.deckID);
      this.$router.push(`/decks/${this.deckID}`);
    },
  },
};
</script>
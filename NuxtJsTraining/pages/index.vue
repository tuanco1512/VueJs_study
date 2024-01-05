<template>
  <div id="root">
    <div>
      <DefaultHeader />
      <h1>Homepage is here...</h1>
    </div>
  </div>
</template>

<script>
import DefaultHeader from "@/components/Header/DefaultHeader";

export default {
  components: {
    DefaultHeader,
  },
  name: "IndexPage",
};
</script>

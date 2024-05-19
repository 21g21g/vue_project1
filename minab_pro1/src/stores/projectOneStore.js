import { defineStore } from "pinia";

export const projectoneStore = defineStore("project", {
  state: () => ({
    cityName: " ",
  }),
  actions: {
    addName(name) {
      this.$state.cityName = name;
    },
  },
});

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    tasks: [],
    highestID: 0
  },
  mutations: {
    setTasks(state, inTasks) {
      state.tasks = inTasks;
    },
    addTask(state, inTask) {
      state.tasks.push(inTask);
    },
    clearTasks(state) {
      state.tasks = [];
    },
    setLoading(state, inBool) {
      state.loading = inBool;
    },
    setHighestID(state, num) {
      state.highestID = num;
    }
  },
  actions: {
    validateTask(task) {
      if (typeof task.id != "number") throw new Error("Task ID must be a number.");
      if (typeof task.description === "undefined") throw new Error("Task description cannot be undefined. ID: " + task.id);
      if (typeof task.author === "undefined") throw new Error("Task author cannot be undefined. ID: " + task.id);
      if (typeof task.timestamp === "undefined") throw new Error("Task timestamp cannot be undefined. ID: " + task.id);
      if (typeof task.status === "undefined") throw new Error("Task status cannot be undefined. ID: " + task.id);
      return true;
    },
    async fetchTasks(context) {
      context.commit("setLoading", true);
      let apiResponse = (await axios.get(/* API URL here */)).data.tasks;
      try {
        if (!Array.isArray(apiResponse)) throw new Error("Invalid API response.")
        apiResponse.forEach(function f(task) {
          this.dispatch.validateTask(task);
          this.commit("addTask", task);
          if (task.id > this.state.highestID) this.commit("setHighestID", task.id);
          }, context);
      } catch (e) {
        console.error("Error during task fetching.");
        console.error(e);
      } finally { context.commit("setLoading", false); }
    },
    addTask(context, task) {
      try {
      this.validateTask(task);
      context.commit("addTask", task);
      if (task.id > this.state.highestID) context.commit("setHighestID", task.id);
      } catch (e) {
        console.error("Error adding task.");
        console.error(e);
      }
    },
    clearTasks(context) {
      context.commit("clearTasks");
    }
  },
  getters: {
    finishedTasks(state) {
      return state.tasks.filter(task => task.status < 0);
    },
    openTasks(state) {
      return state.tasks.filter(task => task.status >= 0);
    },
    underReviewTasks(state) {
      return state.tasks.filter(task => task.state > 0);
    },
    getTaskByID(state) {
      return function f(id) {
        return state.tasks.find(todo => todo.id === id);
      }
    },
  }
  },
);

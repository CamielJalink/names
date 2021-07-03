import { createRouter, createWebHistory } from "vue-router";
import Names from "../views/Names.vue";
import Add from "../views/Add.vue";
import Rate from "../views/Rate.vue";

const routes = [
  {
    path: "/",
    name: "Names",
    component: Names,
  },
  {
    path: "/rate",
    name: "Rate",
    component: Rate,
  },
  {
    path: "/add",
    name: "Add",
    component: Add
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import * as Containers from "./containers";

const fetchContainer = (Containers, container) => {
  if (Containers.hasOwnProperty(container)) {
    return Containers[container];
  }
  return Containers["Main"];
};

export default [
  {
    exact: true,
    path: "/",
    container: fetchContainer(Containers, "Main")
  },
  {
    exact: true,
    path: "/contact",
    container: fetchContainer(Containers, "ContactUs")
  }
];

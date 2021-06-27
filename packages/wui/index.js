import WButton from "./components/button";

const components = [WButton];

const plugins = [
  //
];

const install = (app, opts) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
  plugins.forEach((plugin) => {
    app.use(plugin);
  });
};

export default {
  install,
};

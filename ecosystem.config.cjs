module.exports = {
  apps: [
    {
      name: "Navbahor-Career",
      port: "3050",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};

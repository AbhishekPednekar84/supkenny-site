module.exports = {
  // images: {
  //   domains: ["res.cloudinary.com"],
  // },
  // webpack: (config, { isServer }) => {
  //   // Fixes npm packages that depend on `fs` module
  //   if (!isServer) {
  //     config.node = {
  //       fs: "empty",
  //     };
  //   }

  //   return config;
  // },

  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dqgiewxxc/image/upload/",
  },
};

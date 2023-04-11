const nextConfig = {
  reactStrictMode: true,
  compiler: {
  },


  // webpack: (config, options) => {
  //   //   // config.plugins.push(
  //   //   //   {

  //   //   //     // apply: (compiler) => {
  //   //   //     //   compiler.hooks.afterEmit.tap('initialize', async (compilation) => {
  //   //   //     //     console.log(".. Run after build")
  //   //   //     //     try {
  //   //   //     //       await siteInfo.init()
  //   //   //     //     } catch (error) {
  //   //   //     //       console.log(error);
  //   //   //     //       process.exit(1)
  //   //   //     //     }
  //   //   //     //   });
  //   //   //     // }
  //   // }

  //   // )
  //   //   config.node = false,
  //   // config.resolve.alias = {
  //   //   fallback: {
  //   //     "tls": false
  //   //   }
  //   // }

  //   return config
  // },
}

module.exports = nextConfig

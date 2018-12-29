//https://github.com/vuejs/vue-cli/issues/1081
module.exports = {
  chainWebpack: config => {
    //Disable thread-loader, cache-loader
    const tsRule = config.module.rule('ts').test(/\.ts$/);
    const tsxRule = config.module.rule('tsx').test(/\.tsx$/);

    tsRule.uses.delete('cache-loader');
    tsxRule.uses.delete('cache-loader');
    tsRule.uses.delete('thread-loader');
    tsxRule.uses.delete('thread-loader');

    //Enable the generating of declaration files
    tsRule
      .use('ts-loader')
      .loader('ts-loader')
      .tap(opts => {
        opts.compilerOptions = { declaration: true };
        opts.transpileOnly = false;
        opts.happyPackMode = false;
        return opts;
      });
  }
};

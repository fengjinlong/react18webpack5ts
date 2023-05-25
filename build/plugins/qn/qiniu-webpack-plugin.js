const Qiniu = require("./qiniu");
const PLUGIN_NAME = "qiniu-s-webpack-plugin";

class QiuniuPlugin {
  constructor(options) {
    this.qiniu = new Qiniu(options);
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync(
      PLUGIN_NAME,
      async (compilation, callback) => {
        const fileNameAry = Object.keys(compilation.assets);
        const buildPath = compiler.options.output.path;
        const filePathAry = fileNameAry.map(
          (filename) => `${buildPath}/${filename}`
        );

        //上传文件
        filePathAry.forEach(async (filePath) => {
          await this.qiniu.putFile(filePath);
        });

        callback();
      }
    );
  }
}

module.exports = QiuniuPlugin;

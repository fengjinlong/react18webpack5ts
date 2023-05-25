const qiniu = require("qiniu");

class Qiniu {
  options = {
    accessKey: "",
    secretKey: "",
    bucket: "",
  };

  constructor(options) {
    const { accessKey, secretKey, bucket } = options;
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const _options = {
      scope: bucket,
    };
    const putPolicy = new qiniu.rs.PutPolicy(_options);
    const config = new qiniu.conf.Config();
    this.options = options;
    this.uploadToken = putPolicy.uploadToken(mac);
    this.formUploader = new qiniu.form_up.FormUploader(config);
  }

  putFile(filePath) {
    const putExtra = new qiniu.form_up.PutExtra();

    return new Promise((resolve, reject) => {
      this.formUploader.putFile(
        this.uploadToken,
        null,
        filePath,
        putExtra,
        function (respErr, respBody, respInfo) {
          if (respErr) {
            throw respErr;
          }
          if (respInfo.statusCode == 200) {
            resolve();
          } else {
            console.log(respInfo.statusCode);
            console.log(respBody);
            reject(respBody);
          }
        }
      );
    });
  }
}

module.exports = Qiniu;

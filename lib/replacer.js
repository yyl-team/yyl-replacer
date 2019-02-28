const REG = {
  SUGAR_DATA: /__data\(['"](\w+)["']\)/g
};
const replacer = {
  REG,
  dataRender(cnt, data) {
    if (typeof cnt === 'string') {
      return cnt.replace(REG.SUGAR_DATA, (str, $1) => {
        return data[$1] || '';
      });
    } else {
      throw 'cnt must be string';
    }
  }
};

module.exports = replacer;

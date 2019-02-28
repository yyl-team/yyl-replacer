# yyl-replacer

## 引用
```
const rp = require('yyl-replacer');
```

## API
### rp.dataRender(cnt, data);
```
/**
 * 内容替换 约定内容中变量格式为 __data('keyword') 的形式
 * @param  {String} cnt  需要替换的内容
 * @param  {Object} data 数据对象
 * @return {String} r    替换的结果
 */
rp.dataRender(cnt, data);
```

### rp.REG.SUGAR_DATA
```
/**
 * data 匹配用正则
 * @return {RegExp}
 */
rp.REG.SUGAR_DATA
```

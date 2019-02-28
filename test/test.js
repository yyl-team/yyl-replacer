const rp = require('../lib/replacer.js');
const TEST_CTRL = {
  DATA_RENDER: true
};

if (TEST_CTRL.DATA_RENDER) {
  it('rp.dataRender(cnt, data)', () => {
    const tests = [{
      argu: ['now is a __data("status") day.', { status: 'good' }],
      result: 'now is a good day.'
    }, {
      argu: ['now is a __data("status") day.', { status: 1 }],
      result: 'now is a 1 day.'
    }, {
      argu: ['now is a __data("status") day.', { status: true }],
      result: 'now is a true day.'
    }, {
      argu: ['now is a __data("status")__data("status") day.', { status: 'good' }],
      result: 'now is a goodgood day.'
    }, {
      argu: ['now is a __data(\'status\') day.', { status: 'good' }],
      result: 'now is a good day.'
    }];

    tests.forEach((item) => {
      expect(rp.dataRender(...item.argu)).toEqual(item.result);
    });
  });
}

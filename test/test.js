const { dataRender } = require('../')
const TEST_CTRL = {
  DATA_RENDER: true,
}

if (TEST_CTRL.DATA_RENDER) {
  it('dataRender(cnt, data)', () => {
    expect(
      dataRender('now is a __data("status") day.', { status: 'good' })
    ).toEqual('now is a good day.')

    expect(dataRender('now is a __data("status") day.', { status: 1 })).toEqual(
      'now is a 1 day.'
    )

    expect(
      dataRender('now is a __data("status") day.', { status: true })
    ).toEqual('now is a true day.')

    expect(
      dataRender('now is a __data("status") day.', { status: false })
    ).toEqual('now is a false day.')

    expect(
      dataRender('now is a __data("status")__data("status") day.', {
        status: 'good',
      })
    ).toEqual('now is a goodgood day.')

    expect(
      dataRender("now is a __data('status') day.", { status: 'good' })
    ).toEqual('now is a good day.')

    expect(
      dataRender('now is a __data("first._sub") day.', {
        first: { _sub: 'good' },
      })
    ).toEqual('now is a good day.')

    expect(
      dataRender('now is a __data("first._sub") day.', { first: 'good' })
    ).toEqual('now is a  day.')

    expect(
      dataRender('now is a __data("first._sub") day.', { zz: 'good' })
    ).toEqual('now is a  day.')

    expect(dataRender('now is a __data("a") day.', { zz: 'good' })).toEqual(
      'now is a  day.'
    )
  })
}

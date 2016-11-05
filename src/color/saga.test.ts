import saga from './saga'
import {nextColor} from './actions'

describe('Color saga', () => {
  it('should cycle until a previous/next event is fired', () => {
    // Start off saga
    const it = saga()
    expect(it.next()).toMatchSnapshot()

    // Ensure that auto next color event is emitted by default
    Array.from({length: 2}).forEach(() => {
      expect(it.next({})).toMatchSnapshot()
      expect(it.next()).toMatchSnapshot()
    })

    // Verify saga ends when end is reached
    expect(it.next({end: nextColor()})).toMatchSnapshot()
  })
})

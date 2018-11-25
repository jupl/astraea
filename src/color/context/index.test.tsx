import {shallow} from 'enzyme'
import React from 'react'
import {Provider} from '.'

jest.useFakeTimers()

describe('Color provider', () => {
  const COLORS: [string, ...string[]] = ['red', 'white', 'blue']

  it('should have setup and takedown as expected', () => {
    const wrapper = shallow<Provider>(<Provider colors={COLORS} />)
    expect(wrapper.state()).toMatchObject({
      autoColor: true,
      selectedColor: 'red',
    })
    wrapper.unmount()
  })

  it('should automatically change colors', () => {
    const wrapper = shallow<Provider>(<Provider colors={COLORS} />)
    expect(wrapper.state()).toMatchObject({
      autoColor: true,
      selectedColor: 'red',
    })
    jest.runOnlyPendingTimers()
    expect(wrapper.state()).toMatchObject({
      autoColor: true,
      selectedColor: 'white',
    })
    jest.runOnlyPendingTimers()
    expect(wrapper.state()).toMatchObject({
      autoColor: true,
      selectedColor: 'blue',
    })
    jest.runOnlyPendingTimers()
    expect(wrapper.state()).toMatchObject({
      autoColor: true,
      selectedColor: 'red',
    })
  })

  it('should switch to next color', () => {
    const wrapper = shallow<Provider>(<Provider colors={COLORS} />)
    expect(wrapper.state()).toMatchObject({
      autoColor: true,
      selectedColor: 'red',
    })
    wrapper.state().nextColor()
    jest.runOnlyPendingTimers()
    jest.runOnlyPendingTimers()
    expect(wrapper.state()).toMatchObject({
      autoColor: false,
      selectedColor: 'white',
    })
  })

  it('should switch to previous color', () => {
    const wrapper = shallow<Provider>(<Provider colors={COLORS} />)
    expect(wrapper.state()).toMatchObject({
      autoColor: true,
      selectedColor: 'red',
    })
    wrapper.state().previousColor()
    jest.runOnlyPendingTimers()
    jest.runOnlyPendingTimers()
    expect(wrapper.state()).toMatchObject({
      autoColor: false,
      selectedColor: 'blue',
    })
  })

  it('should handle changes to props', () => {
    const wrapper = shallow<Provider>(<Provider colors={COLORS} />)
    expect(wrapper.state()).toMatchObject({
      autoColor: true,
      selectedColor: 'red',
    })
    wrapper.state().nextColor()
    expect(wrapper.state()).toMatchObject({
      autoColor: false,
      selectedColor: 'white',
    })
    wrapper.setProps({colors: ['green', 'white', 'red']})
    expect(wrapper.state()).toMatchObject({
      autoColor: false,
      selectedColor: 'white',
    })
    wrapper.state().nextColor()
    wrapper.setProps({colors: ['blue', 'white']})
    expect(wrapper.state()).toMatchObject({
      autoColor: false,
      selectedColor: 'blue',
    })
  })
})

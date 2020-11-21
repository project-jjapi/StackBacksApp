import React from 'react'
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'

/**
 * import component Header
 */
import Header from '../../../components/Header'

/**
 * TODO: Test component header
 */

describe('<Header />', () => {
  const wrapper = mount(<Header />)
  test('should render one header', () => {
    expect(wrapper.length).toEqual(1)
  })
  test('should have four links', () => {
    expect(wrapper.find('li')).toHaveLength(4)
  })
  test('should create snapshot', () => {
    const snapshot = create(<Header />)
    expect(snapshot.toJSON()).toMatchSnapshot()
  })
})

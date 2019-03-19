import React from 'react'
import { shallow } from 'enzyme'
import App from '../components/App'

describe('App', () => {
  var wrapper

  beforeAll(() => {
    wrapper = shallow(<App />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a div', () => {
    const divs = wrapper.find('div')
    expect(divs.length).toEqual(1)
  })

  it('renders the Main component', () => {
    const main = wrapper.find('ListUsers')
    
  })

})

import '@testing-library/jest-dom/extend-expect';
import Card from './Card';
import Form from './Form'
import React, { Component } from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';

configure({ adapter: new Adapter() });


describe('Card testing', () => {
    let wrapper;
    wrapper = shallow(<Card value='3' debug />);

   /* beforeEach(()=>{
       wrapper = shallow(<Card value='3' debug />);
    })*/

      test('renders ', () => {
          expect(wrapper.find('p').text()).toBe('3');
      });

  })


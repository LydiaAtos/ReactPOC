  
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';
import React, { Component } from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import Store from "./Store";

configure({ adapter: new Adapter() });

describe('Footer testing', () => {
    let wrapper;
    wrapper = mount(
        <Provider store={Store}>
          <Footer />
        </Provider>
    );
      test('renders ', () => {
          expect(wrapper.find('label').text()).toBe('Show:');
      });

  })
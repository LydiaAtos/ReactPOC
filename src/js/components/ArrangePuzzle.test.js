import '@testing-library/jest-dom/extend-expect';
import Card from './Card';
import Form from './Form'
import React, { Component } from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import ArrangePuzzle from './ArrangePuzzle';

configure({ adapter: new Adapter() });

describe('Array Puzzle testing', () => {
    let wrapper;
    wrapper = mount(<ArrangePuzzle puzzleType='number' debug />);

   /* beforeEach(()=>{
       wrapper = shallow(<Card value='3' debug />);
    })*/

      test('render initial values ', () => {
          expect(wrapper.find('h3').text()).toBe('Arrange in Ascending Order');
          expect(wrapper.find('#submit-btn').text()).toBe('Submit');
          expect(wrapper.find('#next-btn').text()).toBe('Next');
      })

     
      test("render after user input", ()=>{
        var firstInput = wrapper.find('#one-input').find('input');
        // firstInput.simulate('change', { target: { value: '1' } })
        firstInput.value = '1';
        expect(firstInput.value).toBe('1');

        var secondInput = wrapper.find('#two-input').find('input');
        secondInput.value = '2';
        expect(secondInput.value).toBe('2');

        var threeInput = wrapper.find('#three-input').find('input');
        threeInput.value = '5';
        expect(threeInput.value).toBe('5');


        var firstCard = wrapper.find('#first-card');
        expect(firstCard.props().value).toBe(1);

        var firstCard = wrapper.find('#first-card');
        expect(firstCard.props().value).toBe(1);

        var firstCard = wrapper.find('#first-card');
        expect(firstCard.props().value).toBe(1);

        var secondCard = wrapper.find('#second-card');
        expect(secondCard.props().value).toBe(5);

        var thirdCard = wrapper.find('#third-card');
        expect(thirdCard.props().value).toBe(2);
        
        expect(firstInput.ref).toBeTruthy();
        expect(secondInput.ref).toBeTruthy();
        expect(threeInput.ref).toBeTruthy();


        //expect(firstInput.ref.current.value).toHaveBeenCalledTimes(1)
        //const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { value } });

        //wrapper.find('#submit-btn').simulate('click');
       // expect(wrapper.find('h3').text()).toBe('Your Answer is Wrong');

      })

      test("render after button click without user input", ()=>{
        wrapper.find('#submit-btn').simulate('click');
        expect(wrapper.find('h3').text()).toBe('Your Answer is Wrong');

        wrapper.find('#next-btn').simulate('click');
        expect(wrapper.find('h3').text()).toBe('Arrange in Ascending Order');

      })


      test('spyOn().mockReturnValue()', () => {
        
      });


  })
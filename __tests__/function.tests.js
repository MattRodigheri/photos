import React from 'react';
import App from '../src/App.jsx';
import ArrowRight from '../src/ArrowRight.jsx'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';


Enzyme.configure({ adapter: new Adapter() });


describe('componentDidMount', () => {
  it('fetches data on componentDidMount', () => {
    const app = shallow(<App />);
    app.instance().componentDidMount();
  });

  it('sets the state on componentDidMount', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve({
          images: [
            {"ID":1,"url":"https://i.imgur.com/AUCn7BL.jpg","photographer":"Matt R.","friends":470,"reviews":26}
          ]
        })
      })
    }))
    const renderedComponent = await shallow(<App />)
    await renderedComponent.update()
    expect(renderedComponent.state('images').length).toEqual(1)
  });
});

describe('Test arrow components', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn(
      console.log('right test')
    );
    const arrow = shallow((<img className='arrow right-arrow' src='../right-arrow.png' onClick={mockCallBack} />));
    arrow.find('img').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('Test click event', () => {
    const mockCallBack = jest.fn(
      console.log('left test')
    );
    const arrow = shallow((<img className='arrow left-arrow' src='../left-arrow.png' onClick={mockCallBack} />));
    arrow.find('img').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

import React from 'react';
import App from '../src/App.jsx';
import Photos from '../src/Photos.jsx';
import PhotoLeft from '../src/PhotoLeft.jsx'
import PhotoCenter from '../src/PhotoCenter.jsx'
import PhotoRight from '../src/PhotoRight.jsx'
import ArrowLeft from '../src/ArrowLeft.jsx';
import ArrowRight from '../src/ArrowRight.jsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';


Enzyme.configure({ adapter: new Adapter() });


describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('checks the state', async () => {
    const wrapper = shallow(<App />);
    expect(Array.isArray(wrapper.state('images'))).toBe(true);
  })
});



describe('Photos', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Photos />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('PhotoLeft', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<img className='photo left-photo'/>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('PhotoCenter', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<img className='photo center-photo'/>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('PhotoRight', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<img className='photo right-photo'/>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ArrowLeft', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ArrowLeft />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ArrowRight', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ArrowRight />);
    expect(wrapper).toMatchSnapshot();
  });
});

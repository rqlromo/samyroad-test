import React from 'react';
import Like from './like.js';
import renderer from 'react-test-renderer';

test('renders properly', () => {
  const component = renderer.create(<Like/>);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

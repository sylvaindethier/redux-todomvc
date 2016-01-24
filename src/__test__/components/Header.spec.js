import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Header from '../../components/Header';
import CreateText from '../../components/actions/CreateText';
import actions from '../../actions';

function setup() {
  const props = {
    actions,
    editing: { id: '', text: '' },
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(
    <Header {...props} />
  );
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
}

describe('Header component', () => {
  it('should render correctly', () => {
    const { output, props: { editing } } = setup();
    expect(output.type).toBe('header');
    expect(output.props.className).toBe('header');

    const [h1, elCreateText] = output.props.children;
    expect(h1.type).toBe('h1');
    expect(h1.props.children).toBe('todos');

    expect(elCreateText.type).toBe(CreateText);
    expect(elCreateText.props.actions).toBe(actions);
    expect(elCreateText.props.editing).toBe(editing);
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import DesignButton from './DesignButton';

test('render test, default DesignButton', () => {
    const component = renderer.create(
        <DesignButton />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('render test, DesignButton', () => {
    const component = renderer.create(
        <DesignButton context={"test context"} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
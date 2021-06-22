import React from 'react';
import renderer from 'react-test-renderer';
import DesignButton from './DesignButton';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <DesignButton />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import LoginBox from "./LoginBox";


test('LoginBox test', () => {
    const component = renderer.create(
        <LoginBox />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

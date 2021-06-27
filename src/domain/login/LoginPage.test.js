import React from 'react';
import renderer from 'react-test-renderer';
import LoginPage from "./LoginPage";

test('LoginPage test', () => {
    const component = renderer.create(
        <LoginPage />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

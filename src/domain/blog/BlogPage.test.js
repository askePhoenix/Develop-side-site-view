import React from 'react';
import renderer from 'react-test-renderer';
import BlogPage from "./BlogPage";

test('BlogPage test', () => {
    const component = renderer.create(
        <BlogPage />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

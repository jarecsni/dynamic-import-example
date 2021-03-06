import React from 'react';

import * as glob from './autoload/*';

export default class Tab4 extends React.Component {
    componentDidMount() {
        // webpack treats import() as a split-point and puts the requested module in a separate chunk.
        // Using webpack magic comments below to declare the name of the separate chunk
        // Other dynamically loaded imports with this same chunk name will be bundled
        // together and lazy loaded! The comment is totally optional. Webpack will assign
        // the bundle name for me if the comment is omitted.
        let sub = './dynamic/one';
        import(/* webpackChunkName: 'dyna' */ `${sub}/dynmodule`)
            .then((dyn) => {
                dyn.default();
            })
            .catch(error => {
                console.log(error);
            });

        // let context = require.context("./autoload", true, /\.js$/);
        // let obj = {};
        // context.keys().forEach(function (key) {
        //     obj[key] = context(key);
        //     obj[key].default();
        // });

        Object.keys(glob).forEach(key => {
            glob[key]();
        });
    }

    render() {
        return (
            <ul>
                <li>I'm a plain React component....</li>
            </ul>
        )
    }
}
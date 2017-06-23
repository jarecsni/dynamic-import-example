import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';

let Tab3 = Loadable({
  loader: () => import('./Tab3'),
  loading: Loading
});

export default function Tab3Lazy() {
  return (
    <div>
      <h1>React-loadable Example</h1>
      <p>This tab uses <a href="">react-loadable</a> to lazy load a heavy component.</p>
      <Tab3/>
    </div>
  );
}
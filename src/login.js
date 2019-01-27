import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import Login from './application/Login';
import Worker from './service/worker';

import './index.css';

if (typeof PRODUCTION !== 'undefined') {
  OfflinePluginRuntime.install();
}

// 演示 Web Worker 的功能
const worker = new Worker();

worker.expensive(1000).then(count => {
  console.log(`Ran ${count} loops`);
});

render(<Login title="Webpack 4 Demo Login" />, document.querySelector('#root'));

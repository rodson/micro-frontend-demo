
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { registerMicroApps, start, setDefaultMountApp, runAfterFirstMounted } from 'qiankun';


function Render(props) {
  const { loading } = props;

  return (
    <>
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="subapp-viewport" />
    </>
  );
}

function render({ loading }) {
  const container = document.getElementById('subapp-container');
  const root = ReactDOM.createRoot(container);
  root.render(<Render loading={loading} />);
}

render({ loading: true });

const loader = (loading) => render({ loading });


registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: '//localhost:7100',
    container: '#subapp-viewport',
    loader,
    activeRule: '/react16',
  }
],{
  beforeLoad: [
    (app) => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
    },
  ],
  beforeMount: [
    (app) => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
});

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/react16');


start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});

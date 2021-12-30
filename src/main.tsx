import '@logseq/libs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function main() {
  const key = logseq.baseInfo.id;
  console.info(`${key}: MAIN`);

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );

  logseq.provideModel({
    show() {
      logseq.showMainUI();
    },
  });

  logseq.setMainUIInlineStyle({
    position: 'fixed',
    zIndex: 11,
  });

  const toolbarButtonKey = 'tags-plugin-open';

  logseq.provideStyle(`
    div[data-injected-ui=${toolbarButtonKey}-${key}] {
      display: flex;
      align-items: center;
      font-weight: 500;
      position: relative;
    }
  `);

  logseq.App.registerUIItem('toolbar', {
    key: toolbarButtonKey,
    template: `
    <a data-on-click="show" class="button" style="font-size: 20px">
      #
    </a>
  `,
  });
}

logseq.ready(main).catch(console.error);

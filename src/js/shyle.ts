const TITLE = 'index';

import Modal from './components/modal';
import Tooltip from './components/tooltip';

import Typography from './content/typography';

document.addEventListener('DOMContentLoaded', () => {
  const SCOPE = 'DOMContentLoaded';

  const modal = new Modal({
    triggerSelector: '[data-shy-modal-target]',
    closeSelector: '.shy-modal-close'
  });
  console.log(`[${TITLE}#${SCOPE}] modal`, modal);

  const tooltip = new Tooltip({
    selector: '[data-shy-tooltip]'
  });
  console.log(`[${TITLE}#${SCOPE}] tooltip`, tooltip);

  const typography = new Typography({
    selector: '[data-shy-fs]',
    inputSelector: 'input[data-shy-fs-target]'
  });
  console.log(`[${TITLE}#${SCOPE}] typography`, typography);
});

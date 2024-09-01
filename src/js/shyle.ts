const TITLE = 'index';

import Modal from './components/modal';
import Tooltip from './components/tooltip';

// Initialize Modal
document.addEventListener('DOMContentLoaded', () => {
  const SCOPE = 'DOMContentLoaded';

  const modal = new Modal({
    triggerSelector: '.shy-modal-trigger',
    modalSelector: '#shyModal',
    closeSelector: '.shy-modal-close'
  });
  console.log(`[${TITLE}#${SCOPE}] modal`, modal);

  // Initialize Tooltip
  const tooltip = new Tooltip({
    selector: '[data-tooltip-text]'
  });
  console.log(`[${TITLE}#${SCOPE}] tooltip`, tooltip);
});

const TITLE = 'index';

import Modal from './components/modal';
import Tooltip from './components/tooltip';

// Initialize Modal
document.addEventListener('DOMContentLoaded', () => {
  const SCOPE = 'DOMContentLoaded';

  const modal = new Modal({
    triggerSelector: '.shyle-modal-trigger',
    modalSelector: '#shyleModal',
    closeSelector: '.shyle-modal-close'
  });
  console.log(`[${TITLE}#${SCOPE}] modal`, modal);

  // Initialize Tooltip
  const tooltip = new Tooltip({
    selector: '[data-tooltip]',
    placement: 'top' // can be 'top', 'bottom', 'left', 'right'
  });
  console.log(`[${TITLE}#${SCOPE}] tooltip`, tooltip);
});

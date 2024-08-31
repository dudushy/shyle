import Modal from './components/modal';
import Tooltip from './components/tooltip';

// Initialize Modal
document.addEventListener('DOMContentLoaded', () => {
  const modal = new Modal({
    triggerSelector: '.shyle-modal-trigger',
    modalSelector: '#shyleModal',
    closeSelector: '.shyle-modal-close'
  });

  // Initialize Tooltip
  const tooltip = new Tooltip({
    selector: '[data-tooltip]',
    placement: 'top' // can be 'top', 'bottom', 'left', 'right'
  });
});

const TITLE = 'modal';

interface ModalOptions {
  triggerSelector: string;
  closeSelector: string;
}

class Modal {
  private triggerElements: NodeListOf<HTMLElement>;
  private closeButtons: NodeListOf<HTMLElement>;

  constructor(options: ModalOptions) {
    const SCOPE = 'constructor';
    console.log(`[${TITLE}#${SCOPE}]`);

    this.triggerElements = document.querySelectorAll(options.triggerSelector);
    this.closeButtons = document.querySelectorAll(options.closeSelector);

    this.bindEvents();
  }

  // Bind events to open modals and close modals
  private bindEvents() {
    const SCOPE = 'bindEvents';
    console.log(`[${TITLE}#${SCOPE}]`);

    // Bind open event to all trigger elements
    this.triggerElements.forEach(trigger => {
      const modalSelector = trigger.getAttribute('data-shy-modal-target');
      const modal = modalSelector ? document.querySelector(modalSelector) : null;

      if (modal) {
        trigger.addEventListener('click', () => this.open(modal as HTMLElement));
      }
    });

    // Bind close event to all close buttons
    this.closeButtons.forEach(closeButton => {
      closeButton.addEventListener('click', () => {
        const modal = closeButton.closest('.shy-modal');
        if (modal) {
          this.close(modal as HTMLElement);
        }
      });
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('shy-modal')) {
        this.close(target);
      }
    });
  }

  // Open the modal
  private open(modal: HTMLElement) {
    const SCOPE = 'open';
    console.log(`[${TITLE}#${SCOPE}]`, modal);

    modal.classList.add('shy-modal-open');
  }

  // Close the modal
  private close(modal: HTMLElement) {
    const SCOPE = 'close';
    console.log(`[${TITLE}#${SCOPE}]`, modal);

    modal.classList.remove('shy-modal-open');
  }
}

export default Modal;

const TITLE = 'modal';

interface ModalOptions {
  triggerSelector: string;
  modalSelector: string;
  closeSelector: string;
}

class Modal {
  private triggerElements: NodeListOf<HTMLElement>;
  private modal: HTMLElement | null;
  private closeButton: HTMLElement | null;

  constructor(options: ModalOptions) {
    const SCOPE = 'constructor';
    console.log(`[${TITLE}#${SCOPE}]`);

    this.triggerElements = document.querySelectorAll(options.triggerSelector);
    this.modal = document.querySelector(options.modalSelector);
    this.closeButton = document.querySelector(options.closeSelector);

    this.bindEvents();
  }

  private bindEvents() {
    const SCOPE = 'bindEvents';
    console.log(`[${TITLE}#${SCOPE}]`);

    this.triggerElements.forEach(trigger => {
      trigger.addEventListener('click', () => this.open());
    });

    if (this.closeButton && this.modal) {
      this.closeButton.addEventListener('click', () => this.close());
    }

    if (this.modal) {
      window.addEventListener('click', (event) => {
        if (event.target === this.modal) {
          this.close();
        }
      });
    }
  }

  private open() {
    const SCOPE = 'open';
    console.log(`[${TITLE}#${SCOPE}]`);

    if (this.modal) {
      this.modal.classList.add('shyle-modal-open');
    }
  }

  private close() {
    const SCOPE = 'close';
    console.log(`[${TITLE}#${SCOPE}]`);

    if (this.modal) {
      this.modal.classList.remove('shyle-modal-open');
    }
  }
}

export default Modal;

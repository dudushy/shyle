const TITLE = 'tooltip';

interface TooltipOptions {
  selector: string;
  placement: 'top' | 'bottom' | 'left' | 'right';
}

class Tooltip {
  private elements: NodeListOf<HTMLElement>;
  private placement: string;

  constructor(options: TooltipOptions) {
    const SCOPE = 'constructor';
    console.log(`[${TITLE}#${SCOPE}]`);

    this.elements = document.querySelectorAll(options.selector);
    this.placement = options.placement;

    this.bindEvents();
  }

  private bindEvents() {
    const SCOPE = 'bindEvents';
    console.log(`[${TITLE}#${SCOPE}]`);

    this.elements.forEach(element => {
      element.addEventListener('mouseenter', (e) => this.show(e, element));
      element.addEventListener('mouseleave', () => this.hide(element));
    });
  }

  private show(event: MouseEvent, element: HTMLElement) {
    const SCOPE = 'show';
    console.log(`[${TITLE}#${SCOPE}]`);

    const tooltipText = element.getAttribute('data-tooltip');
    console.log(`[${TITLE}#${SCOPE}] tooltipText`, tooltipText);

    if (!tooltipText) return;

    const tooltip = document.createElement('div');
    tooltip.className = `shyle-tooltip shyle-tooltip-${this.placement}`;
    tooltip.innerText = tooltipText;
    document.body.appendChild(tooltip);

    const rect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (this.placement) {
      case 'top':
        top = rect.top - tooltipRect.height - 8;
        left = rect.left + (rect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = rect.bottom + 8;
        left = rect.left + (rect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = rect.top + (rect.height - tooltipRect.height) / 2;
        left = rect.left - tooltipRect.width - 8;
        break;
      case 'right':
        top = rect.top + (rect.height - tooltipRect.height) / 2;
        left = rect.right + 8;
        break;
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;

    element.setAttribute('data-tooltip-id', tooltip.id);
  }

  private hide(element: HTMLElement) {
    const SCOPE = 'hide';
    console.log(`[${TITLE}#${SCOPE}]`);

    const tooltipId = element.getAttribute('data-tooltip-id');
    if (tooltipId) {
      const tooltip = document.getElementById(tooltipId);
      if (tooltip) {
        tooltip.remove();
      }
      element.removeAttribute('data-tooltip-id');
    }
  }
}

export default Tooltip;

const TITLE = 'tooltip';

interface TooltipOptions {
  selector: string;
}

class Tooltip {
  private elements: NodeListOf<HTMLElement>;
  private tooltip: HTMLDivElement | null = null;

  constructor(options: TooltipOptions) {
    const SCOPE = 'constructor';
    console.log(`[${TITLE}#${SCOPE}]`);

    this.elements = document.querySelectorAll(options.selector);

    // Create a single tooltip element
    this.tooltip = document.createElement('div');
    this.tooltip.className = 'shy-tooltip';
    this.tooltip.style.position = 'absolute';
    this.tooltip.style.visibility = 'hidden';
    document.body.appendChild(this.tooltip);

    this.bindEvents();
  }

  private bindEvents() {
    const SCOPE = 'bindEvents';
    console.log(`[${TITLE}#${SCOPE}]`);

    this.elements.forEach(element => {
      element.addEventListener('mouseenter', (e) => this.show(e, element));
      element.addEventListener('mouseleave', () => this.hide());
    });
  }

  private show(event: MouseEvent, element: HTMLElement) {
    const SCOPE = 'show';
    console.log(`[${TITLE}#${SCOPE}]`);

    const tooltipText = element.getAttribute('data-shy-tooltip');
    console.log(`[${TITLE}#${SCOPE}] tooltipText`, tooltipText);

    if (!tooltipText || !this.tooltip) return;

    const tooltipPlacement = element.getAttribute('data-shy-tooltip-placement') || 'top';
    console.log(`[${TITLE}#${SCOPE}] tooltipPlacement`, tooltipPlacement);

    this.tooltip.innerText = tooltipText;
    this.tooltip.className = `shy-tooltip shy-tooltip-${tooltipPlacement}`;
    this.tooltip.style.visibility = 'visible';

    const rect = element.getBoundingClientRect();
    const tooltipRect = this.tooltip.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (tooltipPlacement) {
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

    this.tooltip.style.top = `${top}px`;
    this.tooltip.style.left = `${left}px`;
  }

  private hide() {
    const SCOPE = 'hide';
    console.log(`[${TITLE}#${SCOPE}]`);

    if (this.tooltip) {
      this.tooltip.style.visibility = 'hidden';
    }
  }
}

export default Tooltip;

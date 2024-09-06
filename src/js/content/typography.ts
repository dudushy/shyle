const TITLE = 'typography';

interface TypographyOptions {
  selector: string;
  inputSelector: string;
}

class Typography {
  private elements: NodeListOf<HTMLElement>;
  private inputs: NodeListOf<HTMLInputElement>;

  constructor(options: TypographyOptions) {
    const SCOPE = 'constructor';
    console.log(`[${TITLE}#${SCOPE}]`);

    this.elements = document.querySelectorAll(options.selector);
    this.inputs = document.querySelectorAll(options.inputSelector);

    this.applyFontSizes();
    this.bindCustomEvents();
  }

  // Apply initial font sizes to all target elements
  private applyFontSizes() {
    const SCOPE = 'applyFontSizes';
    console.log(`[${TITLE}#${SCOPE}]`);

    this.elements.forEach(element => {
      this.applyFontSize(element);
    });
  }

  // Apply font size to the target element
  private applyFontSize(element: HTMLElement) {
    const SCOPE = 'applyFontSize';
    console.log(`[${TITLE}#${SCOPE}]`, element);

    const scaleFactor = element.getAttribute('data-shy-fs') || '1'; // Default to 1 if not provided
    const responsiveUnit = getComputedStyle(document.documentElement).getPropertyValue('--shy-responsive-unit').trim();

    if (responsiveUnit) {
      const fontSize = `calc(${responsiveUnit} * ${scaleFactor})`;
      element.style.fontSize = fontSize;
      console.log(`[${TITLE}#${SCOPE}] fontSize`, fontSize);
    }
  }

  // Bind input events to update target font sizes
  private bindCustomEvents() {
    const SCOPE = 'bindCustomEvents';
    console.log(`[${TITLE}#${SCOPE}]`);

    this.inputs.forEach(input => {
      const targetSelector = input.getAttribute('data-shy-fs-target');
      if (targetSelector) {
        const targetElement = document.querySelector<HTMLElement>(targetSelector);
        if (targetElement) {
          this.updateCustomFontSize(targetElement, input.value); // Apply font size on load
          input.addEventListener('input', () => {
            this.updateCustomFontSize(targetElement, input.value);
          });
        }
      }
    });
  }

  // Update the font size of the target element based on input value
  private updateCustomFontSize(element: HTMLElement, inputValue: string) {
    const SCOPE = 'updateCustomFontSize';
    console.log(`[${TITLE}#${SCOPE}] inputValue`, inputValue);

    const responsiveUnit = getComputedStyle(document.documentElement).getPropertyValue('--shy-responsive-unit').trim();

    if (responsiveUnit && inputValue) {
      const fontSize = `calc(${responsiveUnit} * ${inputValue})`;
      element.style.fontSize = fontSize;
      console.log(`[${TITLE}#${SCOPE}] fontSize`, fontSize);
    }
  }
}

export default Typography;

import cornerstone from 'cornerstone-core';
import { import as csTools, toolColors } from 'cornerstone-tools';

const BaseTool = csTools('base/BaseTool');
const drawTextBox = csTools('drawing/drawTextBox');
const getNewContext = csTools('drawing/getNewContext');

export default class ImageStatistics extends BaseTool {
  constructor(configuration = {}) {
    const defaultConfig = {
      name: 'ImageStatistics',
      mixins: ['enabledOrDisabledBinaryTool']
    };
    const initialConfiguration = Object.assign(defaultConfig, configuration);

    super(initialConfiguration);

    this.initialConfiguration = initialConfiguration;
  }

  enabledCallback() {
    console.debug(`EnableCallback: ${this.name}`);
    console.log('test');
    this._forceImageUpdate();
  }

  disabledCallback() {
    console.debug(`DisableCallback: ${this.name}`);
    this._forceImageUpdate();
  }

  _forceImageUpdate() {
    const enabledElement = cornerstone.getEnabledElement(this.element);
    const hasImageToUpdate = enabledElement.image;

    if (hasImageToUpdate) {
      cornerstone.updateImage(this.element, true);
    }
  }

  renderToolData(evt) {
    const eventData = evt.detail;
    const { canvasContext, image } = eventData;
    const stats = image.stats;

    const textLines = [];
    const context = getNewContext(canvasContext.canvas);
    const color = toolColors.getToolColor();

    Object.keys(stats).forEach(function(key) {
      const text = `${key} : ${stats[key]}`;

      textLines.push(text);
    });

    drawTextBox(context, textLines, 0, 0, color);
  }
}

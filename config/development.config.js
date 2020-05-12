module.exports = {
  templates: {
    BASIC_TEXT_ONLY: 'basic-text-only',
    BASIC_IMAGE_ONLY: 'basic-image-only',
    ORDERED_TEXT_IMAGE: 'ordered-text-image',
    ORDERED_IMAGE_TEXT: 'ordered-image-text',
    ORDERED_TEXT_IMAGE_TEXT: 'ordered-text-image-text',
  },
  host: 'https://staging.mydomain.com/',
  swiper: {
    centered: true,
    cellSpacing: -51,
    swipeSpeed: 550, // ms
    separatorTimeout: 400, // ms how long to stay on card before swiping
    withoutControls: true,
    disableEdgeSwiping: true,
    dragging: true,
    spacing: {
      1: -900,
      2: -600,
      3: -300,
      4: -40,
      5: 0,
      6: 0
    }
  },
  sections: {
    autoSwipeSpeed: 1100,
  }
};

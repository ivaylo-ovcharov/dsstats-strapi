module.exports = {
  'drag-drop-content-types': {
    enabled: true
  },
  'transformer': {
    enabled: true,
    config: {
      responseTransforms: {
        
        removeAttributesKey: true,
        removeDataKey: true,
      },
      // requestTransforms : {
      //   wrapBodyWithDataKey: true
      // },
    }
  },
}
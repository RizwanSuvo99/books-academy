import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source: ['tokens/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'tokens/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

sd.buildAllPlatforms();

console.log('✅ Tokens built successfully!');

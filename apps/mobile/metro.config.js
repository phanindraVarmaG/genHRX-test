const path = require('path');
const { withNxMetro } = require('@nx/expo');
const { getDefaultConfig } = require('@expo/metro-config');
const { mergeConfig } = require('metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const customConfig = {
  cacheVersion: 'mobile',
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'cjs', 'mjs', 'svg'],
    extraNodeModules: {
      '@repo/utils': path.resolve(__dirname, '../../packages/utils'),
    },
  },
};

module.exports = withNxMetro(mergeConfig(defaultConfig, customConfig), {
  // Change this to true to see debugging info.
  // Useful if you have issues resolving modules
  debug: false,
  // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
  extensions: [],
  // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
  watchFolders: [path.resolve(__dirname, '../../packages')],
});

// withNxMetro sets projectRoot to workspaceRoot for monorepo module resolution,
// but this breaks asset serving (Metro looks for assets at workspaceRoot instead
// of apps/mobile). Override projectRoot back to the app directory; watchFolders
// and nodeModulesPaths set by withNxMetro are preserved on the resolver.
const nxConfig = module.exports;
module.exports = {
  ...nxConfig,
  projectRoot: __dirname,
  resolver: {
    ...nxConfig.resolver,
    nodeModulesPaths: [
      path.resolve(__dirname, 'node_modules'),
      ...(nxConfig.resolver?.nodeModulesPaths ?? []),
    ],
  },
};

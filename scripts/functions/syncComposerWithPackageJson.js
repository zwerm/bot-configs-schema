const /** @type {module:fs} */ fs = require('fs');

const buildComposerTimeString = require('./buildComposerTimeString');

/**
 * Copies common fields from the `package.json` into the `composer.json`,
 * so that they're in sync for the upcoming version; also the time field.
 *
 * @param {Object} packageJson the package json as an object.
 * @param {string} composerJsonPath path to the `composer.json` file to read & write.
 */
const syncComposerWithPackageJson = (packageJson, composerJsonPath) => {
    const propertiesToSync = [
        'version',
        'description',
        'license',
        'homepage',
        'keywords'
    ];

    const composerJson = require(composerJsonPath);
    propertiesToSync.forEach(property => console.log(` > syncing ${property}...`) || (composerJson[property] = packageJson[property]));

    console.log(' > updating time...');
    composerJson.time = buildComposerTimeString(new Date());

    console.log(`>> writing to file at ${composerJsonPath}...`);
    fs.writeFileSync(composerJsonPath, JSON.stringify(composerJson, undefined, 4));
};

module.exports = syncComposerWithPackageJson;

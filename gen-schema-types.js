const schemaToTypescript = require('json-schema-to-typescript');
const fs = require('fs');
const prettier = require('prettier');

const schemaFile = 'bot.schema.json';
const typingFile = 'bot.schema.d.ts';

const extraForExperts = [
    'export type BotOptionKey = keyof BotOptions;',
    'export type BotOptionValue<key extends keyof BotOptions> = BotOptions[key];'
].join('\n');

schemaToTypescript.compileFromFile(schemaFile, { unreachableDefinitions: true })
                  .then(ts => `export declare namespace BotsSchema { \n ${ts} \n ${extraForExperts} }`)
                  .then(ts => prettier.format(`${ts}`, {
                      tabWidth: 4,
                      useTabs: false,
                      semi: true,
                      singleQuote: true,
                      trailingComma: 'none',
                      parser: 'typescript'
                  }))
                  .then(ts => fs.writeFileSync(typingFile, ts))
                  .then(() => console.log(`successfully generates ${typingFile} typings for ${schemaFile}`));


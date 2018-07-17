# Zwerm Bot Configuration Schema

JSON schema of verbose configuration settings for bot instances.

`bot.schema.json` defines the schema for the configuration details for a single bot instance.  
`bots.schema.json` defines the schema for a map of bot ids to their respective configuration details for multiple bot instances.

### Installing

Install all dependencies:

```
npm install

```

## Release

To manually publish a version, run

```
npm publish --access public
```

### Versioning

We follow [SemVer](http://semver.org/) for versioning.

When making a Pull Request, add your changes to the *Unreleased* section of [CHANGELOG](https://github.com/zwerm/bot-configs-schema/blob/master/CHANGELOG.md).

To release a new version, run the `npm version` command on `master`, it will take care of everything for you.

`npm version [major | minor | patch]`

## Development

### Branching model

We use a modified [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) branching model. The main difference being is we use `master` as a combined development branch and branch of short living production branches as needed.

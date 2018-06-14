# Zwerm Bot Configuration Schema

JSON schema of verbose configuration settings for spinning up bot instances in an adapter-driven channel-engine-router (AD-CER) environment.

`bot.schema.json` defines the schema for the configuration details for a single bot instance.  
`bots.schema.json` defines the schema for a map of bot ids to their respective configuration details for multiple bot instances.

### Installing

Install all dependencies:

```
npm install

# or better use yarn
yarn

```

## Release

To manually publish a version, run

```
npm publish
```

### Versioning

We use [SemVer](http://semver.org/) for versioning.

## Development

### Branching model

We use a modified [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) branching model. The main difference being is we use `master` as a combined development branch and branch of short living production branches as needed.

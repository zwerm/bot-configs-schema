# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.3.0] - 2018-10-19

### Added
 - Optional `'icon'` property to `webchat-channel-settings` object property.

## [2.2.0] - 2018-09-03

### Added
 - Optional `'icon'` property to `options` object property.
 - Optional `'supportedSystemEvents'` property to `options` object property.
 - Slack configuration support

## [2.1.0] - 2018-07-17

### Added
 - `us-west-2` is now a valid Amazon Lex regions. 

## [2.0.1] - 2018-06-20

Bug fix release for the php class trying to include the schema from the wrong path.

### Changed
 - Use php constants to for schema file path.

## [2.0.1] - 2018-06-20

Maintenance version to fix php path.

## [2.0.0] - 2018-06-20

This major release has the `stamp` channel renamed to `api`.
This is just a name change; no other rules have been changed.

### Changed
 - Renamed `stamp` channel to `api`. ([277d75a])
 - Regenerated schema typings. ([f135e9a])
 - Updated PHP class to use namespacing ([3e40f80])

## [1.0.0] - 2018-06-18

Official Release

## 0.1.0 - 2018-06-18

### Added
 - Initial commit

[Unreleased]: https://github.com/zwerm/bot-configs-schema/compare/v2.0.1...master

[2.0.1]: https://github.com/zwerm/bot-configs-schema/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/zwerm/bot-configs-schema/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/zwerm/bot-configs-schema/compare/v0.1.0...v1.0.0

[277d75a]: https://github.com/zwerm/bot-configs-schema/commit/277d75a
[f135e9a]: https://github.com/zwerm/bot-configs-schema/commit/f135e9a
[3e40f80]: https://github.com/zwerm/bot-configs-schema/commit/3e40f80


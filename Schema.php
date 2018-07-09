<?php
namespace Zwerm\BotConfigs;

/**
 * Class Schema
 *
 * @package Zwerm\BotConfigs
 */
class Schema
{
    /**
     * Gets the `bot.schema.json` file from disk, ready for use in validation.
     *
     * @return object
     */
    static function getSchema()
    {
        return json_decode(file_get_contents(__DIR__ . DIRECTORY_SEPARATOR . 'bot.schema.json'));
    }
}

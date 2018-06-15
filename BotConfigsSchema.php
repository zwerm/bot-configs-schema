<?php

class BotConfigsSchema
{
    /**
     * Gets the `bot.schema.json` file from disk, ready for use in validation.
     *
     * @return object
     */
    static function getSchema()
    {
        return json_decode(file_get_contents('bot.schema.json'));
    }
}

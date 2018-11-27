<a name="Streamer"></a>

## Streamer : <code>object</code>
**Kind**: global namespace  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Streamer options. |
| options.chunkDuration | <code>number</code> | Duration of one chunk. |
| options.mimeCodec | <code>string</code> | mimetype and codec |
| options.urls | <code>array</code> | array of urls |
| options.video | <code>HTMLVideoElement</code> | The default number of players. |
| options.quality | <code>string</code> | Default quality |
| options.totalDuration | <code>number</code> | Video duration |
| options.treasure | <code>object</code> | The default treasure. |
| options.treasure.gold | <code>number</code> | How much gold the party starts with. |

<a name="Streamer+setQuality"></a>

### streamer.setQuality(quality)
Tells streamer which quality to use

**Kind**: instance method of [<code>Streamer</code>](#Streamer)  

| Param | Type | Description |
| --- | --- | --- |
| quality | <code>string</code> | quality value |


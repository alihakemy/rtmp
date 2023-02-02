const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: `0.0.0.0:$PORT`,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port:`0.0.0.0:$PORT`,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();

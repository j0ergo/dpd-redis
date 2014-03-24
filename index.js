
/**
 * Module dependencies
 */
var Resource      = require('deployd/lib/resource'),
    util          = require('util'),
    redis         = require('redis'),
    client        = redis.createClient();

client.on("error", function (err) {
  console.log("Error " + err);
});

/**
 * Module setup.
 */
function Redis( options ) {
  Resource.apply(this, arguments);

  // do the connectivity to the redis server

}

util.inherits( Redis, Resource );

Redis.prototype.clientGeneration = true;

Redis.basicDashboard = {
  settings: [
    {
      name        : 'redisConfig',
      type        : 'string',
      description : 'location of the redis config file'
    }
  ]
};

/**
 * Module methodes
 */
Redis.prototype.handle = function ( ctx, next ) {

  // handle a specific request to the redis service

  console.log("ctx.body: " + JSON.stringify(ctx.body));

  client.set(ctx.body.key, ctx.body.value, function(error, res) {
    ctx.done(error, res);
  });
};

/**
 * Module export
 */
module.exports = Redis;
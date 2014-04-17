
/**
 * Module dependencies
 */
var Resource      = require('deployd/lib/resource'),
    util          = require('util'),
    redis         = require('redis');

/**
 * Module setup.
 */
function Redis( options ) {
  Resource.apply(this, arguments);
  var redisPort = (this.config && this.config.port) ? this.config.port : 6379;
  var redisHost = (this.config && this.config.host) ? this.config.host : "127.0.0.1";
  var redisOptions = (this.config && this.config.options) ? this.config.options : {};
  this.client = redis.createClient(redisPort, redisHost, redisOptions);
}

util.inherits( Redis, Resource );

Redis.prototype.clientGeneration = true;

/**
 * Module methods
 */
Redis.prototype.handle = function ( ctx, next ) {
  if (!ctx.body || !ctx.body.method || !ctx.body.key || !ctx.body.value) {
      next();
  } else {
    if (ctx.body.method == "set") {
      console.log("redis set");
      this.client.set(ctx.body.key, ctx.body.value, function(error, res) {
        if (error) console.log("error " + error);
        ctx.done(error, res);
      });
    } else if (ctx.body.method == "publish") {
      console.log("redis publish");
      this.client.publish(ctx.body.key, ctx.body.value);
      ctx.done(null, "OK");
    } else {
      next();
    }
  }
};

/**
 * Module export
 */
module.exports = Redis;
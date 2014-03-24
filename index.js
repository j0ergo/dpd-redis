
/**
 * Module dependencies
 */
var Resource      = require('deployd/lib/resource'),
    redis         = require('redis');

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

  var error = null;
  // callback:
  ctx.done(error, "done");
};

/**
 * Module export
 */
module.exports = Redis;
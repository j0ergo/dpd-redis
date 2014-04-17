dpd-redis
=========

A very simple Deployd Resource for connectivity to a Redis-Server

Include in your package.json like
<pre>
  "dependencies": {
    "dpd-redis": "git+ssh://git@github.com:ozzroach/dpd-redis.git"
  }
</pre>
then do
<pre>
npm install
</pre>

# Usage in a deployd resource:
In config.json, you can specify another port, another host and the node_redis options (see https://github.com/mranney/node_redis).
In your resources, dpd-redis can be accessed like this:
<pre>
if (dpd.redis) {
    var publish_opts = {
        method: "publish",
        key: "title",
        value: "test"
    };
    dpd.redis.post(publish_opts, function(res, err) {
        console.log("redis publish err: " + err);
        console.log("redis publish res: " + res);
    });
    var set_opts = {
        method: "set",
        key: "title",
        value: "test"
    };
    dpd.redis.post(set_opts, function(res, err) {
        console.log("redis set err: " + err);
        console.log("redis set res: " + res);
    });
} else {
    console.log("no redis available");                
}
</pre>

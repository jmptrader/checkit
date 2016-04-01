window.CHECKIT_EXAMPLES=[{"name":"Check when `example.com` is down","code":"// send request to example.com\nrequest('http://example.com', function (err, resp, body) {\n  // check if response fails\n  if (resp.statusCode != 200) {\n    // send notification/email\n    notify('\"example.com\" is down')\n  }\n  done()\n})\n"},{"name":"Check for new posts on `martinfowler.com`","code":"// fetch RSS feed\nrequest('http://martinfowler.com/feed.atom', function(err, resp, body) {\n  if (resp.statusCode == 200) {\n    // get list of posts\n    parseXml(body, function(err, result) {\n      // date of last post\n      var lastPostDate = result.feed.entry[0].updated[0]\n      // is last post today?\n      if (moment(lastPostDate).isSame(new Date(), 'day')) {\n        // send notification/email\n        notify('New post on martinfowler.com')\n      }\n      done()\n    })\n  } else done()\n})\n"},{"name":"Check if it's freezing today","code":"// using openWeatherMap api\nvar city = 'Paris,fr'\nvar appid = '84c2fc3de4e763a77f42d146a277021a'\nvar url ='http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + appid + '&units=metric'\n\n// request api for today's weather\nrequest({ url: url, json: true }, function(err, resp, body) {\n  // check if temperature below 0\n  if (resp.statusCode == 200 && body.main.temp_min < 0) {\n    // send notification/email\n    notify('Today is freezing')\n  }\n  done()\n})\n"},{"name":"Check when domain is not renewed","code":"var apiKey = 'YOUR_API_KEY'; // don't forget to replace it\nvar domain = 'example.com';\nvar url = 'http://api.whoapi.com/?domain=' + domain + '&r=whois&apikey=' + apiKey;\n\n//request whois API\nrequest({ url: url, json: true }, function (err, resp, body) {\n  // check if domain can be registered\n  if (resp.statusCode == 200 && body.registered == false) {\n    // send notification/email\n    notify('domain \"example.com\" is now available');\n  }\n  done();\n});\n"},{"name":"Keep Heroku dyno alive","code":"// ping heroku dyno to prevent it entering sleep mode\nrequest('https://app.check-it.io/', function(err, resp, body) {\n  done()\n})\n"}]
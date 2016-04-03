// TITLE Check when `example.com` is down

// send request to example.com
request('http://example.com', function (err, resp, body) {
  if (err) throw err;

  // check if response fails
  if (resp.statusCode != 200) {
    // send notification/email
    notify('example.com is down');
  } else {
    log('example.com is working normally');
  }
  done();
});

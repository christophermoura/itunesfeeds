itunesfeeds
===========

Node.js module for fetching iTunes RSS feeds

## :warning: under development

## example
```javascript
var reader = require('itunesfeed');
reader.get('us', 'newapplications', 6002, 300, function(err, apps){
	if (err) throw err
	console.log(apps)
})
```

## docs tbd
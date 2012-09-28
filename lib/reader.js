var request = require('request');

exports.get = function(country,ressource,genre,size,cb) {
	request.get({
		'uri': 'http://itunes.apple.com/'+country+'/rss/'+ressource+'/limit='+size+'/genre='+genre+'/json',
		'json': true
	}, function(e,r,b){
		cb(e, b.feed.entry)
	})
}
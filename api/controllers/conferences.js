'use strict';

var bodyParser = require('body-parser');
var halson = require('halson');
var conferences = require('./../../../../conferences.json')._embedded.conferences;

module.exports = {
  conferences: listConferences,
  conference_details: conference_details
};

function conference_details(req, res) {
  var conference = conferences.filter(function(c){
      return c._links.self.href.toLowerCase() == '/conferences/' + req.swagger.params.conference.value.toLowerCase() + '.json';
  });

  if (conference.length > 0) {
      conference = conference[0];

      var resource = halson({
          name: conference.name,
          date: conference.date,
          city: conference.city,
          url:  conference.url,
          tags: conference.tags,
          days: conference.days
      }).addLink('self', conference._links.self.href.slice(0, -5));
      res.json(resource);
  }else{
      res.status(404).send('');
  }
}

function listConferences(req, res) {
  var embed = [];
  conferences.map(function(conference){
      embed.push(halson({
          name: conference.name,
          date: conference.date,
          city: conference.city,
          url:  conference.url,
          tags: conference.tags,
          days: conference.days
      }).addLink('self', conference._links.self.href.slice(0, -5)));
  });

  var resource = halson({})
      .addLink('self', '/conferences')
      .addEmbed('conferences', embed);

  res.json(resource);
}

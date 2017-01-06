const axios = require('axios');
const config = require('../../../config');
const divisions = require('../../../query');

var results = [];

divisions.forEach((division) => {
  division.departments.forEach((department) => {
    department.classes.forEach((c) => {
      c.subClasses.forEach((subClass) => {
        var items = [];
        axios.get(`${ config.url }/api/search2/catalog/search?class=${ c.name }&context=clearance&department=${ department.name }&division=${ division.name }&includeFlash=false&includePersistent=true&limit=99&page=1&sort=featured&subclass=${ subClass }`)
          .then(function(res) {
            items = items.concat(res.data._embedded[config.products]);
            if (res._links.next) return getNextPageData(res._links.next, items);
          })
          .then(function() {
            // sort items
            // get items from database
            // check for new items
              // add new items to results
          })
      });
    });
  });
});

// send results to email


function getNextPageData(uri, items) {
  return axios.get(`${ config.url }${ res._links.next['href'] }`)
    .then(function(res) {
      items = items.concat(res.data._embedded[config.products]);
      if (res._links.next) return getNextPageData(res._links.next);
    });
}

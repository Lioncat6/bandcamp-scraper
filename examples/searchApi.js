const bandcamp = require('../lib/index')

const body = {
  search_text: 'test',
  search_filter: 'a',
  full_page: false
}

bandcamp.searchApi(body, function (error, searchResults) {
  if (error) {
    console.log(error)
  } else {
    console.log(searchResults)
  }
})

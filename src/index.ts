const algoliasearch = require('algoliasearch')
const { env } = require('process')


;(async () => {
  const searchClient = algoliasearch(
    env.ALGOLIA_APP_ID!,
    env.ALGOLIA_SEARCH_KEY!
  );

  const searchIndex = searchClient.initIndex('breww-index-engine');

  const { hits } = await searchIndex.search({
    query: 'Coors'
  })
  console.log(hits)
})()


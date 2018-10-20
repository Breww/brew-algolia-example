# breww-algolia-indexing

Basic typescript example of queries made using algolia

```ts

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

```

Results in

```js
[ { Name: 'Coors Original',
    id: '3833',
    brewery_id: '399',
    cat_id: '8',
    style_id: '96',
    'Alcohol By Volume': '5.0',
    'International Bitterness Units': '0',
    'Standard Reference Method': '0',
    'Universal Product Code': '0',
    filepath: '',
    Description:
     'Coors beer, first introduced by Adolph Coors in April, 1874, is brewed in the Rockies for a uniquely crisp, clean and drinkable "Mile High Taste.',
    add_user: '',
    last_mod: '',
    Style: 'American-Style Light Lager',
    Category: 'North American Lager',
    Brewer: 'Coors Brewing - Golden Brewery',
    Address: '311 Tenth Street',
    City: 'Golden',
    State: 'Colorado',
    Country: 'United States',
    Coordinates: '39.7599, -105.219',
    Website: 'http://www.coors.com',
    objectID: '54680781',
    _highlightResult: { Name: [Object], Style: [Object], Category: [Object] }
}]
```
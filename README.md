# isMongoObjectID
Super fast function to check if a String is a MongoDB ObjectID based on ES6 Sets.

## Why?
Because **performance does matter**.

**isMongoObjectID** is almost **6x faster** than **objectid.isValid** (from objectid module)

## Measurements

We check 2 Strings: one with objectID formant and another with invalid format for each case. (We use **performance-node** module for measures).

After several execution we get the following results:

```sh
{ name: 'objectid.isValid(id)-measure',
  startTime: 0.8244399875402451,
  duration: 6.259790003299713,
  entryType: 'measure' }
{ name: 'isValidObjectID(id)-measure',
  startTime: 24.24372299015522,
  duration: 1.0192510038614273,
  entryType: 'measure' }
```
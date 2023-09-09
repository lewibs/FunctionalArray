# FunctionalArray
This is intentionally cursed. I would like to implement an [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). With all the included expected syntax support. 

Seems reasonable... Till you find out...

I plan on only doing this using variables (let var const) and also functions...

Nothing else.

There are some methods that I needed to add to support that [] thing arrays do:
```js
/**
 * This is used to set the value at the provided index
 * @prop {Number} the index at which you want to set the value
 */
FunctionalArray.prototype.set = function(i, value) {}
```

Of the existing [interface](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array):
- [ ] FunctionalArray.from()
- [ ] FunctionalArray.fromAsync()
- [ ] FunctionalArray.isArray()
- [ ] FunctionalArray.of()
- [x] FunctionalArray.prototype.length
- [x] FunctionalArray.prototype.at()
- [ ] FunctionalArray.prototype.concat()
- [ ] FunctionalArray.prototype.copyWithin()
- [ ] FunctionalArray.prototype.entries()
- [ ] FunctionalArray.prototype.every()
- [ ] FunctionalArray.prototype.fill()
- [ ] FunctionalArray.prototype.filter()
- [ ] FunctionalArray.prototype.find()
- [ ] FunctionalArray.prototype.findIndex()
- [ ] FunctionalArray.prototype.findLast()
- [ ] FunctionalArray.prototype.findLastIndex()
- [ ] FunctionalArray.prototype.flat()
- [ ] FunctionalArray.prototype.flatMap()
- [ ] FunctionalArray.prototype.forEach()
- [ ] FunctionalArray.prototype.includes()
- [ ] FunctionalArray.prototype.indexOf()
- [ ] FunctionalArray.prototype.join()
- [ ] FunctionalArray.prototype.keys()
- [ ] FunctionalArray.prototype.lastIndexOf()
- [ ] FunctionalArray.prototype.map()
- [ ] FunctionalArray.prototype.pop()
- [ ] FunctionalArray.prototype.push()
- [ ] FunctionalArray.prototype.reduce()
- [ ] FunctionalArray.prototype.reduceRight()
- [ ] FunctionalArray.prototype.reverse()
- [ ] FunctionalArray.prototype.shift()
- [ ] FunctionalArray.prototype.slice()
- [ ] FunctionalArray.prototype.some()
- [ ] FunctionalArray.prototype.sort()
- [ ] FunctionalArray.prototype.splice()
- [ ] FunctionalArray.prototype.toLocaleString()
- [ ] FunctionalArray.prototype.toReversed()
- [ ] FunctionalArray.prototype.toSorted()
- [ ] FunctionalArray.prototype.toSpliced()
- [ ] FunctionalArray.prototype.toString()
- [ ] FunctionalArray.prototype.unshift()
- [ ] FunctionalArray.prototype.values()
- [ ] FunctionalArray.prototype.with()

If you would like to help add functionality please make a fork raise an issue named after the method you're implementing write the method in the correct order that it appears on the list, and add to the automated tests, then make a pr.

Thanks :)
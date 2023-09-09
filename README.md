The venerable master Qc Na was walking with his student, Anton. Hoping to prompt the master into a discussion, Anton said "Master, I have heard that objects are a very good thing - is this true?" Qc Na looked pityingly at his student and replied, "Foolish pupil - objects are merely a poor man's closures."

Chastised, Anton took his leave from his master and returned to his cell, intent on studying closures. He carefully read the entire "Lambda: The Ultimate..." series of papers and its cousins, and implemented a small Scheme interpreter with a closure-based object system. He learned much, and looked forward to informing his master of his progress.

On his next walk with Qc Na, Anton attempted to impress his master by saying "Master, I have diligently studied the matter, and now understand that objects are truly a poor man's closures." Qc Na responded by hitting Anton with his stick, saying "When will you learn? Closures are a poor man's object." At that moment, Anton became enlightened.

"I understand clearly now" Anton exclaimed. With this he rushed off to his computer and worked laboriously all night long. For he understands that closures are objects and objects are closures and that we need to start from the ground up. He clicks and clacks on the keys all night long. Others could hear him from the surrounding houses... "AH HA a closure is inheritance!" click clack thump bang "OOOO YES objects are just procedures" tick tick tick SHOOOWWWOOOP. "AHH YES ALMOST THERE!", He shouted similar cries of enlightenment all night long.

The following morning he rushed to his professor "I am enlightened now because of you. I no longer need to use anything more complex then functions and objects because alas they are one and the same. I don't need an Array because an array is a poor mans function! Look teacher a [Functional Array](https://github.com/lewibs/FunctionalArray) this is everything that..."

*WOOOSH! CRACK!!!*

The master rapped Anton on the head with his ruler and went to town on his knuckles "YOU FOOLISH BOY! This is not at all what I meant! You have no right to write code with these hands! YOU CAN DO THINGS FAR BETTER IF YOU JUST.... GAHHHH!!!!. Why did I take you in as my student! This is just a linked list you ding dong use your languages standard library for this!"

And with that the pupil learned of the risk of enlightenment and vowed never to touch a computer again.

[original article](http://people.csail.mit.edu/gregs/ll1-discuss-archive-html/msg03277.html)

# Note to devs
If you would like to help add functionality please make a fork raise an issue named after the method you're implementing write the method in the correct order that it appears on the list, and add to the automated tests, then make a pr.

Thanks :)

# FunctionalArray
This is intentionally cursed. I would like to implement an [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). With all the included expected syntax support. 

Seems reasonable... Till you find out...

I plan on doing this ONLY using variables and also functions...

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
- [x] FunctionalArray.prototype.toString()
- [ ] FunctionalArray.prototype.unshift()
- [ ] FunctionalArray.prototype.values()
- [ ] FunctionalArray.prototype.with()

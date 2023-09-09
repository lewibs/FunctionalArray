const {FunctionalArray} = require("./FunctionalArray")

test("at", ()=>{
    let values = [1,5,3,56,4,3,7,9,3,2,6,2,60,0,0,3,4,5,6,7,2,5,6,7,3,4,2,6,7,8,9];

    let array = new FunctionalArray(...values);

    for (let i = 0; i < values.length; i++) {
        expect(array.at(i)).toBe(values[i]);
    }
})

test('set', () => {
    //setup
    let array = new FunctionalArray();

    const tests = [
        //fill it
        {index: 0, value: 0},
        {index: 1, value: 1},
        {index: 2, value: 2},
        {index: 3, value: 3},
        {index: 4, value: 4},
        {index: 5, value: 5},
        {index: 6, value: 6},
        {index: 7, value: 7},
        {index: 8, value: 8},
        {index: 9, value: 9},

        //replace some numbers with letters
        {index: 0, value: "a"},
        {index: 4, value: "b"},
        {index: 5, value: "c"},
        {index: 9, value: "d"},

        //add strange values at a gap
        {index: 14, value: {val:"a"}},
        {index: 30, value: {val:"b"}},
        {index: 67, value: [1,2,34]},
        {index: 200, value: new FunctionalArray()},

        //fuzz testing
        ...generateRandomTests(100),
    ];

    const validationArray = [];

    //testing
    //test odd things
    expect(array.at(0)).toBe(undefined);

    //run tests
    for (let test of tests) {
        //console.log(test);
        //fill both arrays with the test value
        validationArray[test.index] = test.value;
        array.set(test.index, test.value);

        //test that the array length is the same;
        expect(array.length).toBe(validationArray.length);

        //check that the structure is the same
        expect(array.toString()).toBe(validationArray.toString());
    }

    function generateRandomTests(tests) {
        const randomTests = [];
        for (let i = 0; i < tests; i++) {
          const randomIndex = Math.floor(Math.random() * 100);
          const randomValue = Math.floor(Math.random() * 100);
          const randomTest = { index: randomIndex, value: randomValue };
          randomTests.push(randomTest);
        }
        return randomTests;
      }
});

test('toString', () => {
    //setup
    const array = new FunctionalArray();
    const validationArray = [];
    const values = [1,2,3,4,5,6,7,8,9,0, "a", "b", "c", [], {a:"a"}, "sdf", undefined, 1, null, "stop"];

    for (let i = 0; i < values.length; i++) {
        validationArray[i] = values[i];
        array.set(i, values[i]);
        expect(array.toString()).toBe(validationArray.toString());
    }
});
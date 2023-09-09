const {FunctionalArray} = require("./FunctionalArray")

test('this test is used to test the set and at methods', () => {
    //setup
    let array = new FunctionalArray();

    const tests = [
        {index: 0, value: 0},
        {index: 1, value: 1},
        {index: 2, value: 2},
        {index: 8, value: 8},
        {index: 3, value: 3},
        {index: 0, value: 5},
    ];

    const validationArray = [];

    //testing
    //test odd things
    expect(array.at(0)).toBe(undefined);

    //run tests
    for (let test of tests) {
        console.log(test);
        //fill both arrays with the test value
        validationArray[test.index] = test.value;
        array.set(test.index, test.value);

        //check that that value is matching
        expect(array.at(test.index)).toBe(test.value);

        //test that the array length is the same;
        expect(array.length).toBe(validationArray.length);

        //check that the structure is the same
        for (let i = 0; i < validationArray.length; i++) {
            expect(array.at(i)).toBe(validationArray[i]);
        }
    }
});
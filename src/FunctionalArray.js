const Index = {
    value: "value",
    previus: "previus",
}

class FunctionalArray {
    length = 0;

    #tail;

    //yea this is technically an array but you cant do 
    //spread without it and I need to match Array docs
    //which uses the spread
    constructor(...values) {
        for (let i = 0; i < values.length; i++ ) {
            this.set(i. values[i]);
        }
    }

    set(index, value) {
        const updateIndex = (previus, value) => {
            return function index(returns) {
                if (returns === Index.previus) {
                    return previus;
                } else if (returns === Index.value) {
                    return value;
                }
            }
        }

        const addIndex = (previus, value) => {
            this.length++;
            return updateIndex(previus, value);
        }

        if (index >= this.length) { //adding past the existing chain
            let add = index - this.length;

            for (let i = 0; i < add; i++ ) {
                this.#tail = addIndex(this.#tail, undefined);
            }

            this.#tail = addIndex(this.#tail, value);
        } else { // we are adding within the prexisting size of the array
            //just update the most recent
            let goback = (this.length - 1) - index;

            let previus = this.#tail(Index.previus);

            for (let backcount = 0 ; backcount < goback; backcount++) {
                previus = previus(Index.previus);
            }

            const trueTail = this.#tail;
            this.#tail = updateIndex(previus, value);
        }
    }

    at(i) {
        if (i >= this.length) {
            return undefined;
        }

        let goback = 0;
        if (i < 0) {
            goback = Math.abs(i);
        } else {
            goback = (this.length - 1) - i;
        }

        let next = this.#tail(Index.previus);
        let value = this.#tail(Index.value);

        for (let backcount = 0 ; backcount < goback; backcount++) {
            value = next(Index.value);
            next = next(Index.previus);
        }

        return value;
    }
}

module.exports = {FunctionalArray}
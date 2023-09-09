const Index = {
    value: "value",
    previus: "previus",
}

//functional as in it works.
class FunctionalArray {
    length = 0;

    #tail;

    constructor(...values) {
        for (let i = 0; i < values.length; i++ ) {
            this.set(i, values[i]);
        }
    }

    set(index, value) {
        const makeIndex = (previus, value) => {
            return function index(returns) {
                if (returns === Index.previus) {
                    return previus;
                } else if (returns === Index.value) {
                    return value;
                }
            }
        }

        if (index >= this.length) { // adding
            let add = index - this.length;

            for (let i = 0; i < add; i++ ) {
                this.#tail = makeIndex(this.#tail, undefined);
                this.length++;
            }

            this.#tail = makeIndex(this.#tail, value);
            this.length++;
        } else { // updating
            if (index === this.length - 1) { //replacing tail easier then fixing the edge case in the else
                this.#tail = makeIndex(this.#tail(Index.previus), value);
            } else {
                const trueTail = this.#tail;
                let goback = (this.length) - index;

                {// for the replacement
                    let previus = trueTail;

                    for (let backcount = 0 ; backcount < goback; backcount++) {
                        previus = previus(Index.previus);
                    }
        
                    this.#tail = makeIndex(previus, value);

                    goback--;
                }

                //for updating the previus refs
                do {
                    let current = trueTail;

                    for (let backcount = 0 ; backcount < goback; backcount++) {
                        value = current(Index.value);
                        current = current(Index.previus);
                    }
        
                    this.#tail = makeIndex(this.#tail, value);

                    goback--;
                } while (goback > 0);
            }
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

    toString() {
        let current = this.#tail;
        let string = '';

        while(current) {
            let value = current(Index.value);

            string = ((value !== undefined && value !== null) ? value : "") + "," + string;

            current = current(Index.previus);
        }

        if (string.endsWith(',')) {
            return string.substring(0, string.length - 1);
        }

        return string;
    }
}

module.exports = {FunctionalArray}
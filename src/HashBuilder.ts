import { Hashable } from "./Hashable";

type AllHashable = boolean | string | Hashable | AllHashableArray;

interface AllHashableArray extends Array<AllHashable> {}

/**
 * Performance of this relies on integers being packed into pointers
 * (known as SMIs on V8).
 */
export class HashBuilder {
    public hash: number = 1234;

    public add(element: AllHashable): this {
        /*if(typeof element === 'number') {
            if(Number.isInteger(element)) {
            } else {

            }
        } else */if(typeof element === 'boolean') {
            this.addSmi(element ? 1 : 0);
        } else if(typeof element === 'string') {
            for(let i = 0; i < element.length; i++) {
                this.addSmi(element.charCodeAt(i));
            }
        } else if(Array.isArray(element)) {
            for(let i = 0; i < element.length; i++) {
                this.add(element[i]);
            }
        } else {
            this.addSmi(element.hash);
        }
        return this;
    }

    /**
     * Adds a number that is guaranteed to be an SMI.
     *
     * @param element
     */
    private addSmi(element: number) {
        this.hash = (((37 * this.hash) | 0) + element) | 0;
    }
}
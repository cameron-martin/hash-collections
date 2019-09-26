import { Suite } from 'benchmark';
import { HashBuilder, HashTable, Hashable } from '..';
import Benchmark = require('benchmark');

const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

const getRandomString = () => {
    const length = getRandomInt();
};

class StringStruct implements Hashable {
    static generateRandom() {
        return new StringStruct(getRandomString(), getRandomString());
    }

    constructor(public readonly string1: string, public readonly string2: string) {}
}

new Suite().add('RegExp#test', function() {
    
  })
  .add('String#indexOf', function() {
    'Hello World!'.indexOf('o') > -1;
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function(this: Benchmark) {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
//   .run({ 'async': true });
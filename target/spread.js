"use strict";

var stuff = [['♈', '♉', '♊', '♋', '♌'], ['♍', '♎'], [['♏', '♐', '♑'], ['♒', '♓'], ['🌸', '🌷', '🌹', '🌺']], ['🌻', '🌼', '🌽'], [[{
  value: '🍅'
}, {
  value: '🍎'
}], [{
  value: '🍏'
}, {
  get: function get() {
    return '🍑';
  }
}], [{
  get: function get() {
    return '🍒';
  }
}, {
  get: function get() {
    return '🍓';
  }
}]]];
/**
 * Из представленного массива stuff необходимо заполнить
 * константы zodiacSigns, flowers, food соответственно
 * знаками задиака, цветами и съедобными объектами.
 * Значения должны получиться плоскими массивами
 * без оберток в виде объектов и методов вида:
 * 🍅 🍎 🍏 🍑 🍒 🍓
 * Попробуйте написать как можно меньше кода для достижения
 * результата.
 */
// const a=stuff
 let [zodi,zodi1,any,flo2,any2] = stuff;
  let [zodi2,zodi3,flo1] = any;
  let [fruit,fruit1,fruit2] = any2;
// let value=
// const any3=any2.map(el.value,el.get)
function getFruit(arr){
  return arr.map(item=>item.value || item.get()); 
};

getFruit(fruit);
getFruit(fruit1);
getFruit(fruit2);

 const f=getFruit(fruit);
 const f1=getFruit(fruit1);
 const f2=getFruit(fruit2);

const zodiacSigns = [...zodi, ...zodi1, ...zodi2, ...zodi3];
const flowers = [...flo1, ...flo2];
const food = [...f,...f1,...f2];
console.log(food);

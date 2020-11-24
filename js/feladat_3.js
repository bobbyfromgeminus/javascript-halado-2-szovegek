'use strict';

// Írj egy függvényt, ami első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, amik stringeket tartalmaznak!
// A függvény:

// összefűz egy tömbbe az összes elemet,
// eltávolítja az ismétlődő elemeket,
// eltávolítja az összes olyan stringet, ami tartalmazza az első paraméterként megadott karaktert,
// eltávolítja a stringek végén lévő white space karaktert
// visszaadja ezt az új tömböt.


const paramChar = "r";
const arr1 = ['Jean-Luc', 'Picard', 'Enterprise   ', 'NCC-1701', 'Sci-Fi', 'Star', 'Trek'];
const arr2 = ['Han', 'Solo', 'Millennium Falcon   ', 'YT-1300', 'Sci-Fi', 'Star', 'Wars'] ;


const stage1 = [paramChar, ...arr1, ...arr2];

const stage2 = stage1.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [] );

//const stage3 = (param, arr) => arr.reduce((unique, param) => unique.includes(param) ? unique : [...unique, param], [] );

//const stage4 = [...stage2.trimEnd()];

console.log(stage1);
console.log(stage2);
console.log(stage3(paramChar, stage2));
console.log(stage4);
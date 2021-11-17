const maps = (fns, lists) => lists.map((list, i) => list.map(fns[i]));

// Alt 1
// const maps = ([fn1, fn2], [list1, list2]) => [list1.map(fn1), list2.map(fn2)];

module.exports = maps;

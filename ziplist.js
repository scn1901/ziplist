/*
  Name: Seri Nakamura
  Date: sept 18
  Title: ziplist
  Description:
    combine two lists with two methods
  time: start: 21:00 end 21:15
 */

function zipList(list1, list2) {
  const combined = [];
  for (let i = 0; i < list2.length; i++) {
    combined.push(list1[i]);
    combined.push(list2[i]);
  }
  return combined;
}

function zipListTheSimpleWay(list1, list2) {
  const bothlist = _.zip(list1, list2);
  return _.flatten(bothlist);
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));

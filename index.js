const data = [
  { userId: 1, name: "orange" },
  { userId: 2, name: "banana" },
  { userId: 1, name: "strawberry" },
  { userId: 1, name: "apple" },
  { userId: 3, name: "orange" },
  { userId: 1, name: "lemon" },
];

let dataList = [];
let uniq = [];

for (let i = 0; i < data.length; i++) {
  let objectAlreadyAdded = dataList.find((el) => el.userId === data[i].userId);

  if (objectAlreadyAdded) {
    if (typeof objectAlreadyAdded.name === "string") {
      objectAlreadyAdded.name = [objectAlreadyAdded.name];
      objectAlreadyAdded.name.push(data[i].name);
    } else {
      objectAlreadyAdded.name.push(data[i].name);
    }
    dataList.push(objectAlreadyAdded);
  } else if (!objectAlreadyAdded) {
    data[i].name = [data[i].name]
    dataList.push(data[i]);
  } 

  uniq = [...new Set(dataList)];
  dataList.concat(uniq);
}

console.log("DATA_LIST", uniq);

// [
//   { userId: 1, name: ['orange', 'strawberry', 'apple', 'lemon'] },
//   { userId: 2, name: ['banana'] },
//   { userId: 3, name: ['orange'] },
// ]

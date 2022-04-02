

const list =[
    {item: "Dog Food", done: "done"},
    {item: "Cat Food", done: "not done"}
]




module.exports = {
    getAll: function() {
        return list;
    },
    create
}


function create(item) {
    // Add the id
    item.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    item.done = false;
    list.push(item);
  }
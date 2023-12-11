var wilders = [];
var user1 = { name: "Pierre", age: 23 };
var user2 = { name: "Paul", age: 33 };
var user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
var prettyPrintWilder = function (users) {
    users.map(function (user) {
        console.log("".concat(user.name, " is ").concat(user.age, " years old"));
    });
};
prettyPrintWilder(wilders);

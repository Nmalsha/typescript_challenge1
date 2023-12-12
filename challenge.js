var wilders = [];
var user1 = { name: "Pierre", age: 23 };
var user2 = { name: "Paul", birthday: "10/02/1990" };
var user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
var prettyPrintWilder = function (users) {
    users.map(function (user) {
        var ageOrBirthday = user.age !== undefined
            ? "is ".concat(user.age, " years old")
            : "was born on ".concat(user.birthday);
        console.log("".concat(user.name, " ").concat(ageOrBirthday));
    });
};
prettyPrintWilder(wilders);

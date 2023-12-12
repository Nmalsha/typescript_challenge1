// challenge.ts
//Déclaire une interface User
interface User {
  name: string;
  age?: number;
  birthday?: string;
}

// Déclairer des type pour la paramétre et retour de la function

type prettyPrintWilderParams = User[];
type prettyPrintWilderReturn = void;

const wilders: User[] = [];
const user1: User = { name: "Pierre", age: 23 };
const user2: User = { name: "Paul", birthday: "10/02/1990" };
const user3: User = { name: "Jacques", age: 25 };

wilders.push(user1);
wilders.push(user2);
wilders.push(user3);

const prettyPrintWilder = function (
  users: prettyPrintWilderParams
): prettyPrintWilderReturn {
  users.map((user) => {
    const ageOrBirthday =
      user.age !== undefined
        ? `is ${user.age} years old`
        : `was born on ${user.birthday}`;
    console.log(`${user.name} ${ageOrBirthday}`);
  });
};

prettyPrintWilder(wilders);

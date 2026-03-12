// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

// 🎯 Task
//     1. Create a shallow copy of user
              let copy1 ={...user}

//     2. Change:
//           i. name in the copied object
// console.log(copy1)
 copy1.name="Harsha"
// console.log(user)
// console.log(copy1)
//           ii. preferences.theme in the copied object
copy1.preferences.theme="Light"

//           iii .Log both original and copied objects
console.log(user)
console.log(copy1)
//           iv. Observe what changes and what doesn’t

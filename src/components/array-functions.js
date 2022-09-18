/*
push : Dizinin sonuna elaman ekler
map:   Dizinin içerisinde tek tek dönmek için kullanılır
find:  Belirtilen koşullarda dizi içerisinde arama yapar, kriterlere uyan  ilk kaydı bulduğu anda return eder
filter:Filtreleme işlemi yapar
some:  Dizi içerisinde ki herhangi bir eleman belirtilen koşula uyuyorsa true döner, uymuyorsa false döner
every: Dizi içerisinde ki bütün elemanların şarta uyması gerekiyor
includes: Dizi içerisinde belirtilen elemanın olup olmadığının sonucunu true veya false ile belirtir
*/
const users =
[
   {
    id:1,
    name:"Ahmet",
    age:15
   },
   {
    id:2,
    name:"Mehmet",
    age:29
   },
   {
     id:3,
     name:"Ali",
     age:56
   },
   {
    id:4,
    name:"Mehmet",
    age:25
   }
];

//push
users.push({id:4,name:"Kübra"});
console.log(users);

//map
users.map((item)=>{
    console.log(item.name);
});

//find
const findIt= users.find((item)=>item.name === 'Mehmet' && item.age > 20);
console.log(findIt);

//filter
const filtered = users.filter((item)=>item.age===15);
console.log(filtered);

//some
const some = users.some((item)=>item.age===35);
console.log(some);

//every
const every = users.every((item)=>item.age>=15);
console.log(every);
//includes
const meyveler=["elma","armut","muz"];
const isIncluded = meyveler.includes("portakal");
console.log(isIncluded);
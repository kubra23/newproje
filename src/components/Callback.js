setTimeout(()=>
{
    console.log("setTimeout belirtilen süre sonunda çalışır");
},5000);

//----------------------------------------------------------------------------------------------------
setInterval(()=>
{
    console.log("setInterval her saniye çalışır.Durdurulmazsa sonsuza kadar çalışır");
},1000);
//----------------------------------------------------------------------------------------------------------
const sayHi=(cb)=>{
    cb();
}
sayHi(()=>{console.log("Hello");}); //callback(cb) kullanımı gösterilmiştir
//-----------------------------------------------------------------------------------------------------------
fakeapi
import fetch from "node-fetch";
import axios from "node-axios";
axios("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => console.log(users));

async function getData() 
{
   const users = await(await ( fetch("https://jsonplaceholder.typicode.com/users"))).json();
    console.log(data);
}

getData();
//------------------------------------------------------------------------------------------------------------------
import axios from "node-axios";
const getComments = (number)=>{
    return new Promise(async (resolve,reject)=>{
        // if(number==1)
        // {
        //     resolve("Comments");
        // }
        // else{
        //     reject("Hata!!!")
        // }

        const {data}=await axios ("https://jsonplaceholder.typicode.com/users");
       
    });
};
getComments(2)
.then((data)=>console.log(data))
.catch((e)=>console.log(e));
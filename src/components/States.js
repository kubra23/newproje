import {useState} from "react"; 

function States(){
    const [name,setName]=useState("Mehmet");
    const [age,setAge]=useState(27);
    const [friends,setFriends]=useState(["Ayşe","Elif"]);
    const [address,setAddress]=useState({title:"Etimesgut/Ankara", zip:34756})
    return(
        <>
          <h2>Merhaba ben {name}!</h2>
          <h3>Benim yaşım {age}</h3>
          <button onClick={()=>setName("Kübra")}>Change name</button>
          <button onClick={()=>setAge(32)}>Change age</button>
          <hr/>
          <h2>Friends</h2>
          {
            friends?.map((friend,index)=>(<div key={index}>{friend}</div>))
          }
          <button onClick={()=>setFriends([...friends,"Hakkı"])}>Add new friends</button>
          <hr/>
          <h2>Address</h2>
          {address.title}{address.zip}
          <br/>
          <br/>
          <button onClick={()=>setAddress({title:"Eryaman/Ankara",zip:98745})}>Change address</button> <br/>
          <button onClick={()=>setAddress({...address,title:"Maden/Elazığ"})}>Change Title address</button>


        </>
    )

}
export default States;
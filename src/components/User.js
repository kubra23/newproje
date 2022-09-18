
import PropTypes from "prop-types";

function User({name,surname,isLoggedIn,age,friends,address}){
  if(!isLoggedIn){
    return(
      <>
         <h1>Kullanıcı girişi yapınız</h1>
      </>

    )
  }
  else{
    return(
    <>
      <h1>
        {`${name} ${surname} ${age}`}
     </h1>
     {address.title} {address.zip}
     <br/>
     <br/>
     {friends?.map((friend)=>(<div key={friend.id}>{friend.name}</div>))}
     </>
    )
  }
}
User.propTypes ={
    name:PropTypes.string.isRequired,
    surname:PropTypes.string.isRequired,
    isLoggedIn:PropTypes.bool.isRequired,
    age:PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    friends:PropTypes.array.isRequired,
    address:PropTypes.shape({
      title:PropTypes.string,
      zip:PropTypes.number
    })
}

User.defaultProps={
  isLoggedIn:true
}





export default User;
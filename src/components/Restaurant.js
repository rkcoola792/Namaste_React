
export const RestaurantCard=({resData})=>{
  
    console.log(resData)
    const {resName,stars,time,price,img}=resData;  
    return (
          <div className="res-card">
          
        
        <img className="res-logo" src={img}></img>
          <h3>{resName}</h3>
          <h4>{stars} stars</h4>
          <h4>{time} mins</h4>
          <h4>{price} for two</h4>
          
          </div>
      )
  }
  
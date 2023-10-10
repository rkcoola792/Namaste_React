import { CLOUDINARY_URL } from "../utils/constants";
export const ItemList=(data)=>{
    console.log("dadadada",data.data)
    console.log("dadadada",data.data)
    return (
      <div>
        {data.data.itemCards.map((e) => (
          <div
            key={e.card.info.id}
            className=" border-slate-270 border-b-2 m-2 p-0 pb-6 pt-0 "
          >
            <div className="flex justify-between">
              <span className="my-4">{e.card.info.name}</span>

              <div className="image">
                <span className="my-4 p-2 ">
                  <img 
                    src={CLOUDINARY_URL + e.card.info.imageId}
                    className="w-[100] mb-1 "
                  ></img>
                </span>
                <span className=" absolute bg-slate-800 opacity-95 text-white rounded-lg py-1 mt-1 px-2 ml-2"> Add +</span>
              </div>
            </div>
            <span className="my-4">₹ {e.card.info.price / 100}.00</span>
          </div>
        ))}{" "}
      </div>
    );
}
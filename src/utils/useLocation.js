import { useEffect , useState } from "react"
const useLocation = ()=>{
    const [lat , setLat] = useState("");
    const [lon , setLon] = useState("");
    useEffect(()=>{
        getLocation()
    },[])

    const getLocation = ()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("lat:-",position.coords.latitude , "long:-",position.coords.longitude);
                setLat((position.coords.latitude).toFixed(6));
                setLon((position.coords.longitude).toFixed(6));
                },
                (err) => {
                  console.log("error in getting the location of the user :-",err);
                }
              );
          } else {
            console.log("Geolocation is not supported by this browser.");
          }
    }

    return [lat , lon]
}

export default useLocation;
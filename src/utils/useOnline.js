import {useState , useEffect} from "react";
const useOnline = () => {
    const [isOnline , setIsOnline] = useState(true);
    useEffect(()=>{
        const handleOnline = ()=>{
            setIsOnline(true);
            console.log("online event hit");
        };
        const handleOffline = ()=>{
            setIsOnline(false);
            console.log("offline event hit");
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline',handleOffline);

        return ()=>{//cleanup function
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);
        }
    },[]);

    return isOnline;
}

export default useOnline;
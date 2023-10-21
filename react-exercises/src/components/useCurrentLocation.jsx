import { useEffect, useState } from "react";

export function useCurrentLocation(){
    const [ location, setLocation ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    function getLocation(){
        setLoading(true)
        setError(null)

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setLocation({latitude, longitude});
                setLoading(false);
            },
            (error) => {
                setError(error)
                setLoading(false)
            }
            )
        }
    };

    useEffect(() => {getLocation()}, [])


    return { location, error, loading, getLocation}
}
import { useCurrentLocation } from "./useCurrentLocation";

export function CurrentLocation(){
    const {location, loading, error, getLocation } = useCurrentLocation()

    return(
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error</h1>}
            {location && <h1>Current location: {location.latitude}, {location.longitude}</h1>}
            <button onClick={getLocation}>Get location</button>
        </div>
    )
}
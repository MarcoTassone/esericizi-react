import { useEffect, useRef } from "react"

export function MountedMessage(){

    const mountedRef = useRef(false)

    const inputRef = useRef(null);

    useEffect(() => {
        if (!mountedRef.current) {
            mountedRef.current = true
            console.log("Mounted for the first time");
        }else{
            console.log("Mounted again");
        }

        inputRef.current?.focus()
    }, [])

    return(
        <form>
            <input ref={inputRef} type="text" />
        </form>
    )
}
export function Container({ title, children }){
    return(
        <div className="app">
            <div className="title">{title}</div>
            <div className="app-content">{children}</div>
        </div>
    ) 
}
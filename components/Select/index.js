import "../../styles/Select.css";

export function Select({description, isRequired=false, value, onchange,children}){
    return(
        <div className="field">
            <label className="label">{description}{isRequired && "*"}</label>
            <div className="select">
                <select className="select-content" value={value} onChange={onchange}>
                    {children}
                </select>
            </div>
        </div>
    )
}

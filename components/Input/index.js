import "./index.css";

export function Input({ description, type, value, onChange }) {
    return (

            <div className="field">
            <label className="label">{description}</label>
            <div className="control">
                <input
                    className="input input-content"
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>

    );
}

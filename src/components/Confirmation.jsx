import "./Confirmation.css"
export const Confirmation = ({ title, message, onConfirm, onCancel}) => {
    return (
        <div className="confirmation-container">
            <div className="modal">
                <h3>{title}</h3>
                <p>{message}</p>
                <div className="modal-actions">
                    <button className="btn cancel" onClick={onCancel}>Cancel</button>
                    <button className="btn delete" onClick={onConfirm}>Delete</button>
                </div>
            </div>
        </div>
    )
}
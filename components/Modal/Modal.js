const Modal = ({show, onHide, children}) => {
    return (
        <>
            <div className={`modal_type ${show ? 'show' : ''}`}>
                <div className="modal_content">
                    {children}
                </div>
                <div className={`modal_overlay ${show ? 'show' : ''}`} onClick={() => onHide(false)}></div>
            </div>
        </>
    );
}

export default Modal;

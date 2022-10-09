import * as React from "react";

export default function Modal(props) {
    return (
        <div>
            <input type="checkbox" id={props.modalId} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <label htmlFor={props.modalId} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
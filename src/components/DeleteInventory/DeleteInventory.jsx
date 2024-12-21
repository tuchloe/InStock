import closeIcon from "../../assets/icons/close-24px.svg";
import "./DeleteInventory.css";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const DeleteInventory = ({inventoryName, closeModal, id, reRender }) => {
    const delRequest = async () => {
        try {
            const response = await fetch(`${API_URL}/api/inventory/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete inventory item');
            }
        }
        catch (err) {
            console.error(err)
        }
        reRender()
        closeModal()
    }

    return (
        <>
            <div className="backdrop" onClick={closeModal}></div>
            <div>
            <dialog className="modal" open>
                <div>
                    <h1
                        className="modal__header"
                    >Delete {inventoryName} inventory item?</h1>
                    <p
                        className="modal__info"
                    >Please confirm that you’d like to delete {inventoryName} from the inventory list. You won’t be able
                        to undo this action.</p>
                <button
                    className="modal__button"
                    onClick={closeModal}
                >
                    <img
                        className="modal__button-image"
                        src={closeIcon}
                        alt="Close"
                    />
                </button>
                <div className="modal__container">
                    <button
                        className="modal__desicion--cancel"
                        onClick={closeModal}
                    >Cancel
                    </button>
                    <button
                        className="modal__desicion--delete"
                        onClick={delRequest}
                    >Delete
                    </button>
                </div>
                </div>
            </dialog>
            </div>
        </>
    );
}

export default DeleteInventory;

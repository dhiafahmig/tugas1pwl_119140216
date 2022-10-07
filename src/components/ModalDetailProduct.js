import '../styles/modalDetailProduct.css';

const ModalDetailProduct = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" className="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default ModalDetailProduct;
import React from "react";

const Modal = ({ title, images, onClose }) => {
  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <h2>{title}</h2>
        <div style={modalStyles.images}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={title} style={modalStyles.image} />
          ))}
        </div>
        <button onClick={onClose} style={modalStyles.button}>
          Close
        </button>
      </div>
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
  },
  images: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Modal;

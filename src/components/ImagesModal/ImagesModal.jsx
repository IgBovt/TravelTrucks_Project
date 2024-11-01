import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(15, 15, 15, 0.9)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onRequestClose, imageLink }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div>{imageLink && <img src={imageLink} alt="Selected Truck" />}</div>
    </Modal>
  );
}

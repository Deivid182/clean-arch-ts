import { Modal, Button } from "@/components/ui";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalFavorites: React.FC<Props> = ({
  isOpen, onClose
}) => {

  return (
    <Modal
      title="Are you sure?"
      description="This action cannot be undone"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex justify-end items-center w-full">
        <Button onClick={onClose} variant={"outline"}>
          Cancel
        </Button>
        <Button
          variant={"destructive"}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default ModalFavorites;
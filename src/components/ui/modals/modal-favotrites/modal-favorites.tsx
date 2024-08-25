import { useState } from "react";
import { Modal, Button, DataTable } from "@/components/ui";
import { SearchKey as SearchKeyType } from "@/models";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { columns } from './columns'

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalFavorites: React.FC<Props> = ({
  isOpen, onClose
}) => {

  const [searchKey, setSearchKey] = useState<SearchKeyType>(SearchKeyType.NAME)

  const favoritesState = useAppSelector(state => state.favorites);
  const dispatch = useAppDispatch();

  const onChangeSearchKey = (value: SearchKeyType) => {
    setSearchKey(value)
  }

  return (
    <Modal
      title="Are you sure?"
      description="This action cannot be undone"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>
        <DataTable
          data={favoritesState.people}
          columns={columns}
          searchKey={searchKey}
          onChangeSearchKey={onChangeSearchKey}
        />
      </div>
    </Modal>
  );
};

export default ModalFavorites;
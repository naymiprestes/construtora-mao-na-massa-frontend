import { useContext } from "react";
import { DivButton, DivModal } from "./style";
import { MaterialsContext } from "../../../context/MaterialsContext";

const DeleteModalMaterials = () => {
  const { setDeleteModalMaterials, idMaterials, handleDelete } =
    useContext(MaterialsContext);
  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <button
            className="buttonModal"
            onClick={() => setDeleteModalMaterials(false)}
          >
            X{" "}
          </button>
        </div>
        <DivButton>
          <h2>Excluir {idMaterials?.description}? </h2>
          <div className="divModal">
            <button className="editEngineer" onClick={handleDelete}>
              Sim
            </button>
            <button
              className="deleteEngineer"
              onClick={() => setDeleteModalMaterials(false)}
            >
              Não
            </button>
          </div>
        </DivButton>
      </div>
    </DivModal>
  );
};
export default DeleteModalMaterials;

import { useContext } from "react";
import { DivButton, DivModal } from "./style";
import { EngineerContext } from "../../../context/EngineerContext";

const DeleteModalUser = () => {
  const { setDeleteModalEngineer, idEngineer, handleDelete } =
    useContext(EngineerContext);
  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <button
            className="buttonModal"
            onClick={() => setDeleteModalEngineer(false)}
          >
            X{" "}
          </button>
        </div>
        <DivButton>
          <h2>Excluir {idEngineer?.name}? </h2>
          <div className="divModal">
            <button className="editEngineer" onClick={handleDelete}>
              Sim
            </button>
            <button
              className="deleteEngineer"
              onClick={() => setDeleteModalEngineer(false)}
            >
              Não
            </button>
          </div>
        </DivButton>
      </div>
    </DivModal>
  );
};
export default DeleteModalUser;

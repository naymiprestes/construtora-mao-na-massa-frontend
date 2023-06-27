import { Link } from "react-router-dom";
import { ButtonEngineer, Div, DivEngineer } from "./style";
import { EngineerContext } from "../../context/EngineerContext";
import { useContext } from "react";
import EditModalEngineer from "../../components/Engineer/editModal/EditModalEngineer";
import AddModalEngineer from "../../components/Engineer/addModal/AddModalEngineer";
import DeleteModalUser from "../../components/Engineer/deleteModal";

const Engineer = () => {
  const {
    engineer,
    setIdEngineer,
    addModalEngineer,
    editModalEngineer,
    deleteModalEngineer,
    setEditModalEngineer,
    setAddModalEngineer,
    setDeleteModalEngineer,
  } = useContext(EngineerContext);

  return (
    <>
      <DivEngineer>
        <h2>Engenheiros</h2>

        <div className="register-back">
          <button
            className="register"
            onClick={() => setAddModalEngineer(true)}
          >
            Cadastrar
          </button>
          <Link to={"/"} className="back">
            Voltar
          </Link>
        </div>
      </DivEngineer>

      <Div>
        {engineer.length !== 0 ? (
          <ul>
            {engineer.map((engineers) => (
              <li key={engineers?.id}>
                <h3> {engineers?.name}</h3>
                <p>CPF: {engineers?.CPF}</p>
                <p>CREA: {engineers?.CREA}</p>
                <p>Telefone: {engineers?.cellphone}</p>
                <p>Email: {engineers?.email}</p>

                <ButtonEngineer>
                  <button
                    className="buttonEdit"
                    onClick={() => {
                      setEditModalEngineer(true);
                      setIdEngineer(engineers);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="buttonDelete"
                    onClick={() => {
                      setDeleteModalEngineer(true);
                      setIdEngineer(engineers);
                    }}
                  >
                    Excluir
                  </button>
                </ButtonEngineer>
              </li>
            ))}
          </ul>
        ) : (
          <span>Não há engenheiros Cadastrados</span>
        )}
      </Div>
      {addModalEngineer && <AddModalEngineer />}
      {editModalEngineer && <EditModalEngineer />}
      {deleteModalEngineer && <DeleteModalUser />}
    </>
  );
};

export default Engineer;

import { useContext } from "react";
import { DivModal, Form } from "./style";
import { ProjectsContext } from "../../../context/ProjectsContext";

const EditModalProjects = () => {
  const { setEditModalProjects } = useContext(ProjectsContext);
  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <h2 className="addEngineer">Editar Projeto</h2>
          <button
            className="buttonModal"
            onClick={() => setEditModalProjects(false)}
          >
            X
          </button>
        </div>

        <Form>
          <div className="teste">
            <div className="teste2">
              <label htmlFor="status">Engenheiro Responsável</label>
              <select id="status">
                <option value="">--------</option>
                <option value="unidade">Naymi de Jesus Prestes</option>
              </select>

              <label htmlFor="description">Descrição</label>
              <textarea name="description" id="description" />

              <p className="data"> Dados da Casa</p>
              <label htmlFor="buildArea">Área Construida</label>
              <input type="text" id="buildArea" />

              <div className="div-house-data">
                <div className="div-number-rooms">
                  <label htmlFor="numberRooms">Quartos</label>
                  <input type="text" id="numberRooms" className="numberRooms" />
                </div>
                <div className="div-number-bathrooms">
                  <label htmlFor="numberBathrooms">Banheiros</label>
                  <input
                    type="text"
                    id="numberBathrooms"
                    className="numberBathrooms"
                  />
                </div>

                <div className="div-amount-floors">
                  <label htmlFor="amountFloors">Pisos</label>
                  <input
                    type="text"
                    id="amountFloors"
                    className="amountFloors"
                  />
                </div>
              </div>
            </div>

            <div className="teste3">
              <p className="list-materials">Lista dos Materiais</p>
              <ul>
                <li>
                  <div className="materials-delete">
                    <p className="p-list-materials">Tinta</p>
                    <button className="button-delete">excluir</button>
                  </div>

                  <div className="materials-delete">
                    <p className="p-list-materials">Cimento</p>
                    <button className="button-delete">excluir</button>
                  </div>

                  <div className="materials-delete">
                    <p className="p-list-materials">Telhado</p>
                    <button className="button-delete">excluir</button>
                  </div>
                </li>
              </ul>
              <div className="div-quant">
                <span>Quantidade:</span>
                <span>Subtotal:</span>
              </div>
            </div>
          </div>
          <button className="button-create-projects">Salvar Alterações</button>
        </Form>
      </div>
    </DivModal>
  );
};

export default EditModalProjects;

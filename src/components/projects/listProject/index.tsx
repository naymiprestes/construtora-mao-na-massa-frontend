import { useContext } from "react";
import { ProjectsContext } from "../../../context/ProjectsContext";
import { Div, DivModal } from "./style";

const ListModalProjects = () => {
  const { setListModalProjects } = useContext(ProjectsContext);
  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <h2>Informações do Projeto</h2>
          <button
            className="buttonModal"
            onClick={() => setListModalProjects(false)}
          >
            X
          </button>
        </div>

        <Div>
          <div className="data-project">
            <h3>Engenheiro Responsável</h3>
            <p>Naymi de Jesus Prestes</p>

            <h3>Descrição do Projeto</h3>
            <p>Casa com dois quartos, banheiro, dois pisos</p>

            <h4>Dados da Casa</h4>
            <h3>Área Construida</h3>
            <p>20m x 7m</p>

            <div className="div-house-data">
              <div className="div-number-rooms">
                <h3>Quartos</h3>
                <p>2</p>
              </div>

              <div className="div-number-bathrooms">
                <h3>Banheiros</h3>
                <p>1</p>
              </div>

              <div className="div-amount-floors">
                <h3>Pisos</h3>
                <p>2</p>
              </div>
            </div>
          </div>

          <div className="data-list-materials">
            <h4>Lista dos Materiais</h4>
            <ul>
              <li>
                <div className="list-materials">
                  <p className="p-list-materials">Tinta</p>
                </div>

                <div className="list-materials">
                  <p className="p-list-materials">Cimento</p>
                </div>

                <div className="list-materials">
                  <p className="p-list-materials">Telhado</p>
                </div>
              </li>
            </ul>
            <div className="div-quant">
              <span>Quantidade:</span>
              <span>Subtotal:</span>
            </div>
          </div>
        </Div>
      </div>
    </DivModal>
  );
};

export default ListModalProjects;

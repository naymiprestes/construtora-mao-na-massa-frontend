import { Link } from "react-router-dom";
import { Container, Div, ListMaterials } from "./styled";
import {
  PiIntersectSquareDuotone,
  PiBathtubLight,
  PiStepsBold,
} from "react-icons/pi";
import { BiBed } from "react-icons/bi";
import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsContext";
import AddListMaterials from "../../components/projects/addListMaterials";

const ListProject = () => {
  const {
    detailsProject,
    addListMaterials,
    setAddListMaterials,
    listMaterials,
  } = useContext(ProjectsContext);

  console.log(listMaterials);
  console.log(detailsProject, "detalhes");

  return (
    <Container>
      <div className="header">
        <h2>Projetos de {detailsProject?.engineer.name}</h2>
        <div className="button-back-projects">
          <Link to={"/projects"} className="button-projects">
            Ver Projetos
          </Link>
          <Link to={"/"} className="button-back">
            Inicio
          </Link>
        </div>
      </div>

      <Div>
        <div>
          <h3>Dados do Projeto</h3>
          <div className="data-project">
            <div className="div-icon-area">
              <PiIntersectSquareDuotone className="icon-area" />
              <p>Área: {detailsProject?.houseData.buildingArea}</p>
            </div>

            <div className="div-icon-room">
              <BiBed className="icon-room" />
              <p>Quartos: {detailsProject?.houseData.numberRooms}</p>
            </div>

            <div className="div-icon-bathroom">
              <PiBathtubLight className="icon-bathroom" />
              <p>Banheiros: {detailsProject?.houseData.numberBathrooms}</p>
            </div>

            <div className="div-icon-floors">
              <PiStepsBold className="icon-floors" />
              <p>Andares: {detailsProject?.houseData.amountFloors}</p>
            </div>
          </div>
        </div>

        <ListMaterials>
          <div className="button-list-materials">
            <h3 className="text-list-materials">Lista de Materias</h3>
            <button
              className="button-list"
              onClick={() => setAddListMaterials(true)}
            >
              Novo Material
            </button>
          </div>

          <div className="list-materials">
            <div>
              <ul>
                {detailsProject?.listMaterials.pListMaterials.map(
                  (material: any) => (
                    <li key={material.id}>
                      <h4> {material.materials.description}</h4>
                      <p>Quantidade: {material.materialsQuantity}</p>
                      <p>Valor Unitário: R${material.materials.value}</p>
                      <p>
                        Subtotal Item: R${" "}
                        {material.materials.value * material.materialsQuantity}{" "}
                      </p>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </ListMaterials>
      </Div>
      {addListMaterials && <AddListMaterials />}
    </Container>
  );
};

export default ListProject;

import { Link, useNavigate } from "react-router-dom";
import { Container, Div } from "./style";
import {
  PiIntersectSquareDuotone,
  PiBathtubLight,
  PiStepsBold,
} from "react-icons/pi";
import { BiBed } from "react-icons/bi";
import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsContext";
import ListProject from "../listProject";

const AllProjects = () => {
  const { projects, getDetailsProject } = useContext(ProjectsContext);
  const navigate = useNavigate();

  return (
    <Container>
      <div className="header">
        <h2>Projetos Cadastrados</h2>
        <div className="button-back-projects">
          <Link to={"/new-projects"} className="button-projects">
            Novo Projeto
          </Link>
          <Link to={"/"} className="button-back">
            Inicio
          </Link>
        </div>
      </div>

      <Div>
        <ul>
          {projects.map((project) => (
            <li
              key={project.id}
              onClick={() => {
                getDetailsProject(project.id);
                navigate("/list-project");
              }}
            >
              <h3>{project.description}</h3>

              <h3 className="data"> Dados da Casa</h3>
              <div className="div-area-rooms">
                <div className="div-area-icons">
                  <PiIntersectSquareDuotone className="icon-area" />
                  <div className="div-area">
                    <h3>Área:</h3>
                    <p> {project.houseData?.buildingArea}</p>
                  </div>
                </div>

                <div className="div-rooms-icons">
                  <BiBed className="icon-room" />
                  <div className="div-rooms">
                    <h3>Quartos:</h3>
                    <p>{project.houseData?.numberRooms}</p>
                  </div>
                </div>
              </div>

              <div className="div-bathroom-floors">
                <div className="div-bathroom-icons">
                  <PiBathtubLight className="icon-bathroom" />
                  <div className="div-bathrooms">
                    <h3>Banheiros: </h3>
                    <p>{project.houseData?.numberBathrooms}</p>
                  </div>
                </div>

                <div className="div-floors-icons">
                  <PiStepsBold className="icon-floors" />
                  <div className="div-floors">
                    <h3>Andares: </h3>
                    <p>{project.houseData?.amountFloors}</p>
                  </div>
                </div>
              </div>

              <h3>Engenheiro(a): {project.engineer?.name}</h3>
            </li>
          ))}
        </ul>
      </Div>
    </Container>
  );
};

export default AllProjects;

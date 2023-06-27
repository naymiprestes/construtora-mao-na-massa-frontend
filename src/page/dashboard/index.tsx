import { Link } from "react-router-dom";
import { Container, Div } from "./style";

const Dashboard = () => {
  return (
    <Container>
      <h1>Construtora mão na massa</h1>

      <Div>
        <Link to={"/engineers"} className="engineer">
          Engenheiros
        </Link>
        <Link to={"/materials"} className="materials">
          Catalogo de Materias
        </Link>
        <Link to={"/construction-projects"} className="construction-project">
          Construção de Projetos
        </Link>
      </Div>
    </Container>
  );
};

export default Dashboard;

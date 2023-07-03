import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Container, Form } from "./style";
import {
  IRegisterProjects,
  ProjectsContext,
} from "../../context/ProjectsContext";
import { useContext } from "react";
import { EngineerContext } from "../../context/EngineerContext";

const Projects = () => {
  const { registerProjects } = useContext(ProjectsContext);
  const { engineer } = useContext(EngineerContext);

  const formRegisterProjects = yup.object().shape({
    description: yup
      .string()
      .required("campo obrigatoório")
      .typeError("campo obrigatório"),
    engineer: yup.object().shape({
      name: yup.string().typeError("campo obrigatório"),
    }),
    houseData: yup.object().shape({
      buildingArea: yup.number().required().typeError("campo obrigatório"),
      numberRooms: yup.number().required().typeError("campo obrigatório"),
      numberBathrooms: yup.number().required().typeError("campo obrigatório"),
      amountFloors: yup.number().required().typeError("campo obrigatório"),
    }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterProjects>({
    resolver: yupResolver(formRegisterProjects),
  });

  return (
    <Container>
      <div className="header">
        <h2>Projetos de Construção</h2>
        <div className="button-back-projects">
          <Link to={"/projects"} className="button-projects">
            Ver Projetos
          </Link>
          <Link to={"/"} className="button-back">
            Inicio
          </Link>
        </div>
      </div>

      <div className="template">
        <h3>Cadastro de Projetos</h3>
        <Form onSubmit={handleSubmit(registerProjects)}>
          <label htmlFor="status">Engenheiro Responsável</label>
          <select id="status" {...register("engineer.name")}>
            <option value="">selecione um engenheiro</option>
            {engineer.map((engineers) => (
              <option value={engineers.name}>{engineers.name}</option>
            ))}
          </select>

          <label htmlFor="description">Descrição do Projeto</label>
          <textarea
            id="description"
            placeholder="Digite a descrição do projeto"
            {...register("description")}
          />
          <p>{errors.description?.message}</p>

          <p className="data"> Dados do Imóvel</p>
          <label htmlFor="buildingArea">Área Construida</label>
          <input
            type="number"
            id="buildingArea"
            placeholder="digite área construida"
            {...register("houseData.buildingArea")}
          />
          <p>{errors.houseData?.buildingArea?.message}</p>

          <div className="div-house-data">
            <div>
              <label htmlFor="numberRooms">Quartos</label>
              <input
                type="number"
                id="numberRooms"
                placeholder="0"
                className="numberRooms"
                {...register("houseData.numberRooms")}
              />
              <p>{errors.houseData?.numberRooms?.message}</p>
            </div>
            <div>
              <label htmlFor="numberBathrooms">Banheiros</label>
              <input
                type="number"
                id="numberBathrooms"
                placeholder="0"
                className="numberBathrooms"
                {...register("houseData.numberBathrooms")}
              />
              <p>{errors.houseData?.numberBathrooms?.message}</p>
            </div>

            <div>
              <label htmlFor="amountFloors">Andares</label>
              <input
                type="number"
                id="amountFloors"
                placeholder="0"
                className="amountFloors"
                {...register("houseData.amountFloors")}
              />
              <p>{errors.houseData?.amountFloors?.message}</p>
            </div>
          </div>
          <button className="button-create-projects">Cadastrar</button>
        </Form>
      </div>
    </Container>
  );
};

export default Projects;

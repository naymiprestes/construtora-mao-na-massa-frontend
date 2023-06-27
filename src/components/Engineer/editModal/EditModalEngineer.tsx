import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DivModal, Form } from "./style";
import { useContext } from "react";
import { EngineerContext } from "../../../context/EngineerContext";

interface IEngineerEdit {
  name: string;
  CPF: string;
  CREA: string;
  cellphone: string;
  email: string;
}

const EditModalEngineer = () => {
  const { setEditModalEngineer, handleEdit, idEngineer } =
    useContext(EngineerContext);

  const formModal = yup.object().shape({
    name: yup.string().optional(),
    CPF: yup.string().optional(),
    CREA: yup.string().optional(),
    cellphone: yup.string().optional(),
    email: yup.string().email("email inválido").optional(),
  });

  const { register, handleSubmit } = useForm<IEngineerEdit | any>({
    resolver: yupResolver(formModal),
  });

  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <h2 className="addEngineer">Editar Dados</h2>
          <button
            className="buttonModal"
            onClick={() => setEditModalEngineer(false)}
          >
            X
          </button>
        </div>

        <Form onSubmit={handleSubmit(handleEdit)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            defaultValue={idEngineer?.name}
          />

          <label htmlFor="CPF">CPF</label>
          <input
            type="text"
            id="CPF"
            {...register("CPF")}
            defaultValue={idEngineer?.CPF}
          />

          <label htmlFor="CREA">CREA</label>
          <input
            type="text"
            id="CREA"
            {...register("CREA")}
            defaultValue={idEngineer?.CREA}
          />

          <label htmlFor="cellphone">Telefone</label>
          <input
            type="text"
            id="cellphone"
            {...register("cellphone")}
            defaultValue={idEngineer?.cellphone}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            defaultValue={idEngineer?.email}
          />

          <button className="registerEngineer">Salvar Alterações</button>
        </Form>
      </div>
    </DivModal>
  );
};
export default EditModalEngineer;

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DivModal, Form } from "./style";
import { useContext } from "react";
import {
  EngineerContext,
  IRegisterEngineer,
} from "../../../context/EngineerContext";

const AddModalEngineer = () => {
  const { setAddModalEngineer, registerEngineer } = useContext(EngineerContext);

  const formModal = yup.object().shape({
    name: yup.string().required("campo obrigatório"),
    CPF: yup.string().required("campo obrigatório"),
    CREA: yup.string().required("campo obrigatório"),
    cellphone: yup.string().required("campo obrigatório"),
    email: yup.string().email("email inválido").required("campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterEngineer>({
    resolver: yupResolver(formModal),
  });

  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <h2 className="addEngineer">Cadastrar Engenheiro</h2>
          <button
            className="buttonModal"
            onClick={() => setAddModalEngineer(false)}
          >
            X
          </button>
        </div>

        <Form onSubmit={handleSubmit(registerEngineer)}>
          <label htmlFor="name">Nome*</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome completo"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>

          <label htmlFor="CPF">CPF*</label>
          <input
            type="text"
            id="CPF"
            placeholder="000.000.000-00"
            {...register("CPF")}
          />
          <p>{errors.CPF?.message}</p>

          <label htmlFor="CREA">CREA*</label>
          <input
            type="text"
            id="CREA"
            placeholder="Digite seu CREA"
            {...register("CREA")}
          />
          <p>{errors.CREA?.message}</p>

          <label htmlFor="cellphone">Telefone*</label>
          <input
            type="text"
            id="cellphone"
            placeholder="(xx)xxxxx-xxxx"
            {...register("cellphone")}
          />
          <p>{errors.cellphone?.message}</p>

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            placeholder="exemplo@email.com"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <button className="registerEngineer" type="submit">
            Cadastrar
          </button>
        </Form>
      </div>
    </DivModal>
  );
};
export default AddModalEngineer;

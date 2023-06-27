import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DivModal, Form } from "./style";
import { useContext } from "react";
import { MaterialsContext } from "../../../context/MaterialsContext";

interface IAddModal {
  description: string;
  unitMeasurement: string;
  value: string;
}

const AddModalMaterials = () => {
  const { setAddModalMaterials, registerMaterials } =
    useContext(MaterialsContext);

  const formModal = yup.object().shape({
    description: yup.string().required("campo obrigatório"),
    unitMeasurement: yup.string().required("campo obrigatório"),
    value: yup.string().required("campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddModal>({
    resolver: yupResolver(formModal),
  });

  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <h2 className="addMaterial">Cadastrar Material</h2>
          <button
            className="buttonModal"
            onClick={() => setAddModalMaterials(false)}
          >
            X
          </button>
        </div>

        <Form onSubmit={handleSubmit(registerMaterials)}>
          <label htmlFor="description">Descrição *</label>
          <input
            type="text"
            id="description"
            placeholder="Digite a descrição do material"
            {...register("description")}
          />
          <p>{errors.description?.message}</p>

          <label htmlFor="status">Unidade de Medida *</label>
          <select id="status" {...register("unitMeasurement")}>
            <option value="vazio">selecione unidade</option>
            <option value="unidade">Unidade</option>
            <option value="caixa">Caixa</option>
            <option value="milheiro">Milheiro</option>
            <option value="metro">Metro</option>
            <option value="litro">Litro</option>
          </select>

          <label htmlFor="value">Valor *</label>
          <input
            type="text"
            id="value"
            placeholder="00,00"
            {...register("value")}
          />
          <p>{errors.value?.message}</p>

          <button className="registerMaterial" type="submit">
            Cadastrar
          </button>
        </Form>
      </div>
    </DivModal>
  );
};
export default AddModalMaterials;

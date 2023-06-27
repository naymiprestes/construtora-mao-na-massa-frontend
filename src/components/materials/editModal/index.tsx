import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { MaterialsContext } from "../../../context/MaterialsContext";
import { DivModal, Form } from "./style";

interface IMaterialsEdit {
  description: string;
  unitMeasurement: string;
  value: string;
}

const EditModalMaterials = () => {
  const { setEditModalMaterials, handleEdit, idMaterials } =
    useContext(MaterialsContext);

  const formModal = yup.object().shape({
    description: yup.string().optional(),
    unitMeasurement: yup.string().optional(),
    value: yup.string().optional(),
    cellphone: yup.string().optional(),
    email: yup.string().email("email inválido").optional(),
  });

  const { register, handleSubmit } = useForm<IMaterialsEdit | any>({
    resolver: yupResolver(formModal),
  });

  return (
    <DivModal>
      <div className="modal">
        <div className="headeModal">
          <h2 className="addEngineer">Editar Material</h2>
          <button
            className="buttonModal"
            onClick={() => setEditModalMaterials(false)}
          >
            X
          </button>
        </div>

        <Form onSubmit={handleSubmit(handleEdit)}>
          <label htmlFor="description">Nome</label>
          <input
            type="text"
            id="description"
            {...register("description")}
            defaultValue={idMaterials?.description}
          />
          <label htmlFor="value">Valor</label>
          <input
            type="text"
            id="value"
            defaultValue={idMaterials?.value}
            {...register("value")}
          />

          <label htmlFor="status">Unidade de Medida</label>
          <select id="status" {...register("unitMeasurement")}>
            <option value="vazio">{idMaterials?.unitMeasurement}</option>
            <option value="unidade">Unidade</option>
            <option value="caixa">Caixa</option>
            <option value="milheiro">Milheiro</option>
            <option value="metro">Metro</option>
            <option value="litro">Litro</option>
          </select>

          <button className="registerEngineer" type="submit">
            Salvar Alterações
          </button>
        </Form>
      </div>
    </DivModal>
  );
};
export default EditModalMaterials;

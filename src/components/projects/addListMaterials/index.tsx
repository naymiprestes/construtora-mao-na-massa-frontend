import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DivModal, Form } from "./style";
import { useContext } from "react";
import { ProjectsContext } from "../../../context/ProjectsContext";

interface IAddModal {
  description: string;
  unitMeasurement: string;
  value: string;
}

const AddListMaterials = () => {
  const { setAddListMaterials } = useContext(ProjectsContext);

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
          <h2 className="addListMaterial">Adicionar Material</h2>
          <button
            className="buttonModal"
            onClick={() => setAddListMaterials(false)}
          >
            X
          </button>
        </div>

        <Form>
          <label htmlFor="status">Material</label>
          <select id="status" {...register("unitMeasurement")}>
            <option value="">selecione unidade</option>
            <option value="unidade">Telhado</option>
          </select>

          <label htmlFor="value">Quantidade</label>
          <input
            type="text"
            id="value"
            placeholder="0"
            {...register("value")}
          />
          <p>{errors.value?.message}</p>

          <span>Valor Unitário: </span>
          <span>Total do Item: </span>

          <button className="registerMaterial" type="submit">
            Cadastrar
          </button>
        </Form>
      </div>
    </DivModal>
  );
};
export default AddListMaterials;

import { Link } from "react-router-dom";
import { ButtonMaterials, Div, DivMaterials } from "./style";
import { useContext } from "react";
import { MaterialsContext } from "../../context/MaterialsContext";
import AddModalMaterials from "../../components/materials/addModal/AddModalMaterials";
import EditModalMaterials from "../../components/materials/editModal";
import DeleteModalMaterials from "../../components/materials/deleteModal";

const Materials = () => {
  const {
    materials,
    addModalMaterials,
    editModalMaterials,
    deleteModalMaterials,
    setAddModalMaterials,
    setEditModalMaterials,
    setDeleteModalMaterials,
    setIdMaterials,
  } = useContext(MaterialsContext);

  return (
    <>
      <DivMaterials>
        <div className="header">
          <h2>Catálogo de Materiais</h2>
          <div className="button-back-materials">
            <button
              className="button-materials"
              onClick={() => setAddModalMaterials(true)}
            >
              Cadastrar
            </button>
            <Link to={"/"} className="button-back">
              Inicio
            </Link>
          </div>
        </div>
      </DivMaterials>

      <Div>
        {materials.length !== 0 ? (
          <ul>
            {materials.map((material) => (
              <li key={material?.id}>
                <h3> {material?.description}</h3>
                <p>Und. de Medida: {material?.unitMeasurement}</p>
                <p>Valor: {material?.value}</p>

                <ButtonMaterials>
                  <button
                    className="buttonEdit"
                    onClick={() => {
                      setEditModalMaterials(true);
                      setIdMaterials(material);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="buttonDelete"
                    onClick={() => {
                      setDeleteModalMaterials(true);
                      setIdMaterials(material);
                    }}
                  >
                    Excluir
                  </button>
                </ButtonMaterials>
              </li>
            ))}
          </ul>
        ) : (
          <span>Não há materiais Cadastrados</span>
        )}
      </Div>
      {addModalMaterials && <AddModalMaterials />}
      {editModalMaterials && <EditModalMaterials />}
      {deleteModalMaterials && <DeleteModalMaterials />}
    </>
  );
};

export default Materials;

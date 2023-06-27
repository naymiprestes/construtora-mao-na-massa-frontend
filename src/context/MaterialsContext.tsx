import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

interface IMaterialsProps {
  materials: IMaterials[] | [];
  setMaterials: (materials: IMaterials[] | []) => void;

  idMaterials: IMaterials | null;
  setIdMaterials: (idMaterials: IMaterials | null) => void;

  addModalMaterials: boolean;
  setAddModalMaterials: (addModalMaterials: boolean) => void;

  editModalMaterials: boolean;
  setEditModalMaterials: (editModalMaterials: boolean) => void;

  listModalMaterials: boolean;
  setListModalMaterials: (listModalMaterials: boolean) => void;

  deleteModalMaterials: boolean;
  setDeleteModalMaterials: (deleteModalMaterials: boolean) => void;

  registerMaterials: (data: IRegisterMaterials) => void;

  handleEdit: (data: IHandleEdit) => void;

  handleDelete: () => void;
}

interface IMaterials {
  id: string;
  description: string;
  unitMeasurement: string;
  value: string;
}

export interface IRegisterMaterials {
  description: string;
  unitMeasurement: string;
  value: string;
}

export interface IHandleEdit {
  id?: string;
  description?: string;
  unitMeasurement?: string;
  value?: string;
}

export interface IProviderChildren {
  children: ReactNode;
}

export const MaterialsContext = createContext<IMaterialsProps>(
  {} as IMaterialsProps
);

const MaterialsProvider = ({ children }: IProviderChildren) => {
  const [materials, setMaterials] = useState<IMaterials[] | []>([]);
  const [idMaterials, setIdMaterials] = useState<IMaterials | null>(null);

  const [addModalMaterials, setAddModalMaterials] = useState<boolean>(false);
  const [editModalMaterials, setEditModalMaterials] = useState<boolean>(false);
  const [listModalMaterials, setListModalMaterials] = useState<boolean>(false);
  const [deleteModalMaterials, setDeleteModalMaterials] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const refreshMaterials = () => {
    api.get("/materials").then((response) => {
      setMaterials(response.data);
    });
  };

  useEffect(() => {
    refreshMaterials();
  }, []);

  const registerMaterials = (data: IRegisterMaterials) => {
    api
      .post("/materials", data)
      .then((response) => {
        refreshMaterials();
        setAddModalMaterials(false);
        toast.success("material cadastrado com sucesso!");
        navigate("/materials", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("erro ao cadastrar material");
      });
  };

  const handleEdit = (data: IHandleEdit) => {
    api
      .patch(`/materials/${idMaterials?.id}`, data)
      .then((response) => {
        refreshMaterials();
        setEditModalMaterials(false);
        toast.success("material atualizado com sucesso");
      })
      .catch((err) => {
        toast.error("erro ao atualizar material");
      });
  };

  const handleDelete = async () => {
    await api
      .delete(`/materials/${idMaterials?.id}`)
      .then((response) => {
        refreshMaterials();
        setDeleteModalMaterials(false);
        navigate("/materials", { replace: true });
      })
      .catch((err) => {
        toast.error("erro ao excluir material");
      });
  };

  return (
    <MaterialsContext.Provider
      value={{
        materials,
        setMaterials,
        idMaterials,
        setIdMaterials,
        registerMaterials,
        addModalMaterials,
        editModalMaterials,
        listModalMaterials,
        setAddModalMaterials,
        setEditModalMaterials,
        setListModalMaterials,
        deleteModalMaterials,
        setDeleteModalMaterials,
        handleEdit,
        handleDelete,
      }}
    >
      {children}
    </MaterialsContext.Provider>
  );
};

export default MaterialsProvider;

import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

interface IEngineerProps {
  engineer: IEngineer[] | [];
  setEngineer: (engineer: IEngineer[] | []) => void;

  idEngineer: IEngineer | null;
  setIdEngineer: (idEngineer: IEngineer | null) => void;

  addModalEngineer: boolean;
  setAddModalEngineer: (addModalEngineer: boolean) => void;

  editModalEngineer: boolean;
  setEditModalEngineer: (editModalEngineer: boolean) => void;

  listModalEngineer: boolean;
  setListModalEngineer: (listModalEngineer: boolean) => void;

  deleteModalEngineer: boolean;
  setDeleteModalEngineer: (deleteModalEngineer: boolean) => void;

  registerEngineer: (data: IRegisterEngineer) => void;

  handleEdit: (data: IHandleEdit) => void;

  handleDelete: () => void;
}

interface IEngineer {
  id: string;
  name: string;
  CPF: string;
  CREA: string;
  cellphone: string;
  email: string;
}

export interface IRegisterEngineer {
  name: string;
  CPF: string;
  CREA: string;
  cellphone: string;
  email: string;
}

export interface IHandleEdit {
  name?: string;
  CPF?: string;
  CREA?: string;
  cellphone?: string;
  email?: string;
}

export interface IProviderChildren {
  children: ReactNode;
}

export const EngineerContext = createContext<IEngineerProps>(
  {} as IEngineerProps
);

const EngineerProvider = ({ children }: IProviderChildren) => {
  const [engineer, setEngineer] = useState<IEngineer[] | []>([]);
  const [idEngineer, setIdEngineer] = useState<IEngineer | null>(null);

  const [addModalEngineer, setAddModalEngineer] = useState<boolean>(false);
  const [editModalEngineer, setEditModalEngineer] = useState<boolean>(false);
  const [listModalEngineer, setListModalEngineer] = useState<boolean>(false);
  const [deleteModalEngineer, setDeleteModalEngineer] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const refreshEngineers = () => {
    api.get("/engineers").then((response) => {
      setEngineer(response.data);
    });
  };

  useEffect(() => {
    refreshEngineers();
  }, []);

  const registerEngineer = (data: IRegisterEngineer) => {
    console.log(data, "data");
    api
      .post("/engineers", data)
      .then((response) => {
        setAddModalEngineer(false);
        toast.success("engenheiro cadastrado com sucesso!");
        navigate("/engineers", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("erro ao cadastrar engenheiro");
      });
  };

  const handleEdit = async (data: IHandleEdit) => {
    await api
      .patch(`/engineers/${idEngineer?.id}`, data)
      .then((response) => {
        console.log(response, "edit");
        refreshEngineers();
        setIdEngineer(response.data);
        setEditModalEngineer(false);
        toast.success("engenheiro atualizado com sucesso");
      })
      .catch((err) => {
        toast.error("erro ao atualizar engenheiro");
      });
  };

  const handleDelete = async () => {
    await api
      .delete(`/engineers/${idEngineer?.id}`)
      .then((response) => {
        refreshEngineers();
        setDeleteModalEngineer(false);
        navigate("/engineers", { replace: true });
      })
      .catch((err) => {
        toast.error("erro ao excluir engenheiro");
      });
  };

  return (
    <EngineerContext.Provider
      value={{
        engineer,
        setEngineer,
        idEngineer,
        setIdEngineer,
        registerEngineer,
        addModalEngineer,
        editModalEngineer,
        listModalEngineer,
        setAddModalEngineer,
        setEditModalEngineer,
        setListModalEngineer,
        deleteModalEngineer,
        setDeleteModalEngineer,
        handleEdit,
        handleDelete,
      }}
    >
      {children}
    </EngineerContext.Provider>
  );
};

export default EngineerProvider;

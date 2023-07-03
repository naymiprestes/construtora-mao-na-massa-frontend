import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { IEngineer, IHandleEdit } from "./EngineerContext";

interface IProjectsProps {
  projects: IProjects[] | [];
  setProjects: (projects: IProjects[] | []) => void;

  idProjects: IProjects | null;
  setIdProjects: (idProjects: IProjects | null) => void;

  detailsProject: IProjects | null;
  setDetailsProject: (detailsProject: IProjects | null) => void;

  editModalProjects: boolean;
  setEditModalProjects: (editModalProjects: boolean) => void;

  listModalProjects: boolean;
  setListModalProjects: (listModalProjects: boolean) => void;

  addListMaterials: boolean;
  setAddListMaterials: (addListMaterials: boolean) => void;

  listMaterials: IListMaterials[] | [];
  setListMaterials: (data: IListMaterials[]) => void;

  deleteModalProjects: boolean;
  setDeleteModalProjects: (deleteModalProjects: boolean) => void;

  registerProjects: (data: IRegisterProjects) => void;

  editProjects: (data: IProjectsEdit) => void;

  deleteProjects: () => void;

  getDetailsProject: (id: string) => void;

  registerListMaterials: (data: IPListMaterials) => void;
}

interface IProjects {
  id: string;
  description: string;
  houseData: IHouseData;
  engineer: IEngineer;
  listMaterials: any;
}

export interface IHouseData {
  buildingArea: number;
  numberRooms: number;
  numberBathrooms: number;
  amountFloors: number;
}

export interface IRegisterProjects {
  description: string;
  engineer: IHandleEdit;
  houseData: IHouseData;
}

export interface IProjectsEdit {
  description: string;
  houseData: IHouseData;
  engineer: string;
}

export interface IPListMaterials {
  materials: string;
  materialsQuantity: number;
}

export interface IMaterials {
  id: string;
  description: string;
  unitMeasurement: string;
  value: number;
}

export interface IListMaterials {
  id: string;
  subtotal: number;
  quantity: number;
  pListMaterials: IPListMaterials;
  materials: IMaterials;
}

export interface IProviderChildren {
  children: ReactNode;
}

export const ProjectsContext = createContext<IProjectsProps>(
  {} as IProjectsProps
);

const ProjectsProvider = ({ children }: IProviderChildren) => {
  const [projects, setProjects] = useState<IProjects[] | []>([]);
  const [idProjects, setIdProjects] = useState<IProjects | null>(null);
  const [detailsProject, setDetailsProject] = useState<IProjects | null>(null);
  const [addListMaterials, setAddListMaterials] = useState<boolean>(false);
  const [listMaterials, setListMaterials] = useState<IListMaterials[] | []>([]);

  const [editModalProjects, setEditModalProjects] = useState<boolean>(false);
  const [listModalProjects, setListModalProjects] = useState<boolean>(false);
  const [deleteModalProjects, setDeleteModalProjects] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const refreshProjects = () => {
    api.get("/projects").then((response) => {
      setProjects(response.data);
    });
  };

  useEffect(() => {
    refreshProjects();
  }, []);

  const getDetailsProject = (id: string) => {
    api
      .get(`/projects/${id}`)
      .then((response) => {
        setDetailsProject(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registerListMaterials = (data: IPListMaterials) => {
    api
      .post(`/projects/${detailsProject?.id}/list-materials/add`, data)
      .then((response) => {
        setListMaterials(response.data);
      });
  };

  const registerProjects = (data: IRegisterProjects) => {
    api
      .post("/projects", data)
      .then((response) => {
        refreshProjects();
        toast.success("projeto cadastrado com sucesso!");
        navigate("/projects", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("erro ao cadastrar projeto!");
      });
  };

  const editProjects = async (data: IProjectsEdit) => {
    await api
      .patch(`/projects/${idProjects?.id}`, data)
      .then((response) => {
        refreshProjects();
        setIdProjects(response.data);
        setEditModalProjects(false);
        toast.success("atualizado com sucesso");
      })
      .catch((err) => {
        toast.error("erro ao atualizar projeto");
      });
  };

  const deleteProjects = async () => {
    await api
      .delete(`/projects/${idProjects?.id}`)
      .then((response) => {
        refreshProjects();
        setDeleteModalProjects(false);
        navigate("/projects", { replace: true });
      })
      .catch((err) => {
        toast.error("erro ao excluir projeto");
      });
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        idProjects,
        setIdProjects,
        registerProjects,
        editModalProjects,
        listModalProjects,
        setEditModalProjects,
        setListModalProjects,
        deleteModalProjects,
        setDeleteModalProjects,
        editProjects,
        deleteProjects,
        getDetailsProject,
        detailsProject,
        setDetailsProject,
        addListMaterials,
        setAddListMaterials,
        listMaterials,
        setListMaterials,
        registerListMaterials,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;

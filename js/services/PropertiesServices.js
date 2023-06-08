import api from "./AuthencationServices.js"

export const getProperties = async(page, limit, CodigoUsuarioMaestro, statusId, companyId, realtorId) => {
  let {data} = await api.get(`properties?page=${page}&limit=${limit}&CodigoUsuarioMaestro=${CodigoUsuarioMaestro}&realtorId=${realtorId}&statusId=${statusId}&companyId=${companyId}`);
  return data;
}

export const getRegiones = async () => {
  let data = await api.get(`properties/select-filters`);
  return data;
}


export const getCommune = async (id) => {
  let data = await api.get(`properties/communes?stateId=${id}`);
  return data;
}
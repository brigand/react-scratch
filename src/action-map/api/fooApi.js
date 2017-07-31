import api from './index';

export const updateFoo = async (id, value) => {
  const res = await api.put(`/foo/${id}`, {value});
  if (res.ok) return res.body;
  throw Object.assign(new Error(), res.body);
};

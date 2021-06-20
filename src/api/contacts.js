import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

const CONTACTS_API = 'contacts'

export const api = {
  fetchAllContacts: () => {
    return apiInstance.get(CONTACTS_API)
  },
  createContact: (contactData) => {
    return apiInstance.post(CONTACTS_API, contactData)
  },
  deleteContact: (id) => {
    return apiInstance.delete(`${CONTACTS_API}/${id}`)
  },
  updateContact: (id, contactData) => {
    return apiInstance.put(`${CONTACTS_API}/${id}`, contactData)
  },
  fetchSingleContact: (id) => {
    return apiInstance.get(`${CONTACTS_API}/${id}`)
  },
}

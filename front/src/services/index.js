import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 1000,
  headers: { 'X-Dummy-Token': process.env.REACT_APP_TOKEN }
});

export function insertUser(user, callback, errorHandler) {
  api.post('/users', user)
    .then(callback)
    .catch(errorHandler);
}

export function listUsers(callback, errorHandler) {
  api.get('/users')
    .then(callback)
    .catch(errorHandler);
}

export function deleteUser(id, callback, errorHandler) {
  api.delete(`/users/${id}`)
    .then(callback)
    .catch(errorHandler);
}

export function listProducts(callback, errorHandler) {
  api.get('/products')
    .then(callback)
    .catch(errorHandler);
}

export function getProductById(id, callback, errorHandler) {
  api.get(`/products/${id}`)
    .then(callback)
    .catch(errorHandler);
}

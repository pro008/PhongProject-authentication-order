import axios from 'axios';
import * as OrderConstant from '../reducers/order_constant';
import * as UserConstant from '../reducers/user_constant';

export function fetchOrders() {
  return function (dispatch) {
    dispatch({ type: OrderConstant.FETCH_ORDERS });
    axios
      .get(`http://localhost:3000/order_settings`, { withCredentials: true })
      .then((response) => {
        dispatch({ type: OrderConstant.FETCH_ORDERS_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: UserConstant.USER_STATUS_REJECTED, payload: err });
      });
  };
}

export function updateOrder(order_id, order) {
  return function (dispatch) {
    dispatch({ type: OrderConstant.CHANGE_ORDER });
    axios
      .patch(`http://localhost:3000/order_settings/${order_id}`, order, { withCredentials: true })
      .then((response) => {
        dispatch({ type: OrderConstant.CHANGE_ORDER_FULFILLED, payload: response.data, id: order_id });
      })
      .catch((err) => {
        dispatch({ type: OrderConstant.CHANGE_ORDER_REJECTED, payload: err });
      });
  };
}

export function getOrder(order_id) {
  return function (dispatch) {
    dispatch({ type: OrderConstant.GET_ORDER });
    axios
      .get(`http://localhost:3000/order_settings/${order_id}`, { withCredentials: true })
      .then((response) => {
        dispatch({ type: OrderConstant.GET_ORDER_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: OrderConstant.GET_ORDER_REJECTED, payload: err });
      });
  };
}

export function createOrder(order) {
  return function (dispatch) {
    dispatch({ type: OrderConstant.CREATE_ORDER });
    axios
      .post(`http://localhost:3000/order_settings`, order, { withCredentials: true })
      .then((response) => {
        dispatch({ type: OrderConstant.CREATE_ORDER_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: OrderConstant.CREATE_ORDER_REJECTED, payload: err });
      });
  };
}

export function deleteOrder(order_id) {
  return function (dispatch) {
    dispatch({ type: OrderConstant.DELETE_ORDER });
    axios
      .delete(`http://localhost:3000/order_settings/${order_id}`, { withCredentials: true })
      .then((response) => {
        dispatch({ type: OrderConstant.DELETE_ORDER_FULFILLED, payload: order_id });
      })
      .catch((err) => {
        dispatch({ type: OrderConstant.DELETE_ORDER_REJECTED, payload: err });
      });
  };
}

export function filterEmail(id) {
  return function (dispatch) {
    dispatch({ type: OrderConstant.FILTER_EMAIL, payload: id });
  };
}

export function filterStatus(status) {
  return function (dispatch) {
    dispatch({ type: OrderConstant.FILTER_STATUS, payload: status });
  };
}

import * as OrderConstant from './order_constant';
import { extend } from 'lodash';

const filterByType = (element, id, status) => {
  if ((element.user_id == id || id == '') && (element.status == status || status == '')) return true;

  return false;
};

export default function orderReducer(
  state = {
    orders: [],
    order: {},
    filter_id: '',
    filter_status: '',
    listUsers: []
  },
  action
) {
  if (action.payload && action.payload.status == 401) return { ...state, loginStatus: 'FAILED', message: 'FAILED' };

  let new_orders = [];
  switch (action.type) {
    case OrderConstant.FETCH_ORDERS:
      return { ...state, orders: [] };
    case OrderConstant.GET_ORDER_FULFILLED:
      return { ...state, order: action.payload.order };
    case OrderConstant.FETCH_ORDERS_FULFILLED:
      new_orders = action.payload.orders.map((e) => {
        e.is_show = true;
        return e;
      });
      return { ...state, orders: new_orders, listUsers: action.payload.list_users };
    case OrderConstant.CHANGE_ORDER_FULFILLED:
      action.payload.order.is_show = true;
      return { ...state, orders: state.orders.map((obj) => (obj.id == action.id ? action.payload.order : obj)) };
    case OrderConstant.DELETE_ORDER_FULFILLED:
      return {
        ...state,
        orders: state.orders.filter((obj) => {
          return action.payload !== obj.id;
        })
      };
    case OrderConstant.CREATE_ORDER_FULFILLED:
      action.payload.order.is_show = true;
      return { ...state, orders: state.orders.concat(action.payload.order) };
    case OrderConstant.FILTER_EMAIL:
      new_orders = state.orders.map((e) => {
        e.is_show = filterByType(e, action.payload, state.filter_status);
        return e;
      });

      return { ...state, filter_id: action.payload, orders: new_orders };
    case OrderConstant.FILTER_STATUS:
      new_orders = state.orders.map((e) => {
        e.is_show = filterByType(e, state.filter_id, action.payload);
        return e;
      });

      return { ...state, filter_status: action.payload, orders: new_orders };
  }

  return state;
}

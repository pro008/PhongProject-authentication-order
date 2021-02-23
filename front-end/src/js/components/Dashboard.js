import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { fetchOrders, createOrder } from '../actions';
import Table from './order/Table';
import OrderForm from './order/Form';
import FilterOrder from './order/FilterOrder';

const Dashboard = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.OrderReducer.orders);
  const listUsers = useSelector((state) => state.OrderReducer.listUsers);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleSubmit = (values) => {
    dispatch(createOrder({ order: values }));
  };

  const orderContainer = () => {
    if (_.isEmpty(orders)) return <div></div>;

    return (
      <div className="orderContainer">
        <Table orders={orders} />
      </div>
    );
  };

  return (
    <div className="wrapper">
      <FilterOrder data={listUsers} />

      <Link to="/order">
        <Button className="btn-warning">Create Order</Button>
      </Link>

      {orderContainer()}
    </div>
  );
};

export default Dashboard;

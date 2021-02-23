import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { updateOrder, createOrder, getOrder } from '../actions';
import Table from './order/Table';
import OrderForm from './order/Form';

const OrderDetail = (props) => {
  const [isSubmitted, setSubmit] = useState(false);
  const { order_id } = useParams();
  const dispatch = useDispatch();
  const orderReturn = useSelector((state) => state.OrderReducer.order);

  useEffect(() => {
    if (order_id) dispatch(getOrder(order_id));
  }, [dispatch]);

  const handleSubmit = (values) => {
    if (order_id) dispatch(updateOrder(order_id, { order: values }));
    else dispatch(createOrder({ order: values }));

    setSubmit(true);
  };

  if (isSubmitted) return <Redirect to={{ pathname: '/' }} />;

  return (
    <div className="wrapper">
      <OrderForm onSubmit={handleSubmit} initialValues={order_id ? orderReturn : {}} />
    </div>
  );
};

export default OrderDetail;

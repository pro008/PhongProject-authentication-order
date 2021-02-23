import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';

const OrderForm = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="orderForm">
      <label>Order Form</label>
      <div>
        <Field name="title" component="input" type="text" placeholder="Title" />

        <Field name="description" component="textarea" type="text" rows="6" placeholder="description" />

        <Field name="status" component="select">
          <option value="open">Open</option>
          <option value="pending">Pending</option>
          <option value="deliver">Deliver</option>
          <option value="paid">Paid</option>
          <option value="close">Close</option>
        </Field>
      </div>
      <Button type="submit" className="btn-warning">
        Submit
      </Button>

      <Link to="/">
        <Button className="btn-warning">Cancel</Button>
      </Link>
    </form>
  );
};

export default reduxForm({
  form: 'orderform',
  enableReinitialize: true
})(OrderForm);

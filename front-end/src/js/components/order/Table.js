import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOrder } from '../../actions';

const Table = (props) => {
  const dispatch = useDispatch();
  const orders = props.orders.filter((obj) => {
    return obj.is_show == true;
  });

  const editData = (id) => {
    return <Redirect to={{ pathname: `/order/${id}` }} />;
  };

  const removeData = (id) => {
    dispatch(deleteOrder(id));
  };

  const renderHeader = () => {
    let headerElement = ['id', 'title', 'description', 'status', 'operation'];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      orders &&
      orders.map(({ id, title, description, status }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{status}</td>
            <td className="opration">
              <Link to={{ pathname: `/order/${id}`, state: { id: id } }}>
                <button className="ml10">Edit</button>
              </Link>
              <button className="ml10" onClick={() => removeData(id)}>
                Delete
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <div>
      <h1 id="title">Orders</h1>
      <table id="CustomTable">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
};

export default Table;

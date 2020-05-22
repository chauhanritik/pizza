import React, { Component } from "react";
import Classes from "../../styles/MyOrders/OrdersList.module.css";
export class OrdersList extends Component {
  render() {
    const { data } = this.props;
    const {
      OrdersList,
      OrderID,
      OrderDate,
      Products,
      Image,
      Name,
      Size,
      Quantity,
      Price,
      TotalPrice,
    } = Classes;
    return Object.values(data).map((Element) => {
      return (
        <div className="col-md-12" key={Element.order_id}>
          <div className={OrdersList}>
            <div className={OrderID}>{Element.order_id}</div>
            <div className={OrderDate}>{Element.order_at}</div>
            <div className={Products}>
              {Object.values(Element.products).map((ele, index) => {
                return (
                  <div key={index}>
                    <div className={Image}>
                      <img src={ele.image} alt={ele.product_name} width="80" />
                    </div>
                    <div className={Name}>{ele.product_name}</div>
                    <div className={Size}>{ele.order_size}</div>
                    <div className={Quantity}>{ele.quantity}</div>
                    <div className={Price}>{ele.product_order_price}</div>
                  </div>
                );
              })}
            </div>
            <div className={TotalPrice}>{Element.totalPrice}</div>
          </div>
        </div>
      );
    });
  }
}

export default OrdersList;

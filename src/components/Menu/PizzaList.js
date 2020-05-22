import React from "react";
import Classes from "../../styles/Menu/PizzaList.module.css";
import { connect } from "react-redux";
import * as ActionTypes from "../../store/actions/actions";
import { storeItem } from "../../store/actions/actions";
import { format } from "../../constants/constants";
const PizzaList = (props) => {
  const {
    Pizza,
    Image,
    Information,
    Name,
    Price,
    Description,
    Button,
    Size,
    Sizes,
  } = Classes;
  const { data, conversionRate } = props;
  return (
    <>
      {Object.values(data).map((element, index) => {
        return (
          <div className="col-md-5 offset-md-1" key={index}>
            <div className={Pizza}>
              <div className={Image}>
                <img
                  src={element.image}
                  alt={element.name}
                  width="80"
                  height="80"
                />
              </div>
              <div className={Information}>
                <div className={Name}>
                  <b>{element.name}</b>
                  <div className={`${Price} text-muted`}>
                    <div className={Size}>{element.sizes[0].size}</div>
                    &nbsp;&nbsp;&nbsp;
                    {props.currency === "dollars"
                      ? "$" + element.sizes[0].price
                      : "€" + format(element.sizes[0].price * conversionRate)}
                  </div>
                </div>

                <div className={`${Description} text-muted`}>
                  {element.description}
                  <div className={Sizes}>
                    Sizes Available :
                    {element.sizes.map((Size, index) => {
                      return index === element.sizes.length - 1 ? (
                        <span key={index}>{Size.size} </span>
                      ) : (
                        <span key={index}>{Size.size} |</span>
                      );
                    })}
                  </div>
                  <button
                    className={Button}
                    onClick={() => {
                      props.storeItem(element.id);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
const dispatchToProps = (dispatch) => {
  return {
    ShowAlert: () => {
      dispatch({ type: ActionTypes.SHOW_ALERT });
    },
    storeItem: (id) => {
      dispatch(storeItem(id));
    },
  };
};

const stateToProps = (state) => {
  return {
    currency: state.currency,
  };
};

export default connect(stateToProps, dispatchToProps)(PizzaList);

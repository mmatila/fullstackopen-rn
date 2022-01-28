import React from 'react';

const OrderContext = React.createContext();

const orderReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "SORT_BY_LATEST":
      return { ...state, orderBy: "CREATED_AT", orderDirection: "DESC" };
    case "SORT_BY_RATING_HIGHEST":
      return { ...state, orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
    case "SORT_BY_RATING_LOWEST":
      return { ...state, orderBy: "RATING_AVERAGE", orderDirection: "ASC" };
    case "SET_KEYWORD":
      return { ...state, searchKeyword: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const useSort = () => {
  const context = React.useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useSort must be used within a SortProvider");
  }
  return context;
}

export default ({ children }) => {
  const [order, dispatch] = React.useReducer(orderReducer, { orderBy: "CREATED_AT", orderDirection: "DESC" });
  return (
    <OrderContext.Provider value={{ order, dispatch }}>
      {children}
    </OrderContext.Provider>
  )
}

export { orderReducer, useSort };

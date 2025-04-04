import { ADD, DELETE, UPDATE } from "./actions";

const initialState = {
  employee: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        employee: [...state.employee, action.payload],
      };

    case DELETE:
      return {
        ...state,
        employee: state.employee.filter((_, index) => index !== action.payload),
      };

    case UPDATE:
      return {
        ...state,
        employee: state.employee.map((emp, index) =>
          index === action.payload.id ? action.payload.updatedEmployee : emp
        ),
      };

    default:
      return state;
  }
};

export default Reducer;

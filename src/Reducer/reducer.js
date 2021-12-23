const instate = {
    contects: [],
    contect: null,
};

const data = (state = instate, action) => {
    console.log("reducer==>", action.payload);

    switch (action.type) {

        case "CREATE_DATA":
            {
                return {
                    ...state,
                    contects: [action.payload, ...state.contects]
                }
            };

        case "GET_CONTECT":
            let get = state.contects.filter((item) => item.id === action.payload);
            console.log("get", get);
            get = get.values();
            for (let val of get) {
                get = val;
            }

            {
                return {
                    ...state,
                    contect: get,
                }
            }

        case "UPDATE_CONTECT":
            console.log(action.payload.id);
            return {
                ...state,
                contects: state.contects.map((item) =>
                    item.id === action.payload.id ? action.payload : item),

            }

        case "REMOVE":
            return {
                ...state,
                contects: state.contects.filter((item) => item.id != action.payload),
            }
        default: return state
    }
}
export default data;
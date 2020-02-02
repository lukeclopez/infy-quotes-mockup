

const transaction = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [
                ...state,{
                id: action.id,
                    text: action.text
                }
            ];
        case 'DELETE_TRANSACTION':
            return [
                ...state,{

                }
            ]
        default:
            return state;
    }
};

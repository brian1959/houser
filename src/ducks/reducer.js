const initialState = {
    
    propType: 'Single Family Home',
    propadress: '',
    pCity: '',
    pState: 'UT',
    pZip: '',
    mortgage: 0,
    rent: 0,
    pImage: '',
    
};

const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE ='UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';
const UPDATE_IMAGE = 'UPDATE_IMAGE';





export function updatePropertyType(propType){
    return{
        type:UPDATE_PROPERTY_TYPE,
        payload: propType
    }
}
export function updateAddress(propAdress){
    return {
        type: UPDATE_ADDRESS,
        payload:propAdress
    }
}
export function updateCity(pCity){
    return{
        type:UPDATE_CITY,
        payload: pCity
    }
}

export function updateState(pState){
    return {
        type: UPDATE_STATE,
        payload:pState
    }
}

export function updateZip(pZip){
    return {
        type: UPDATE_ZIP,
        payload:pZip
    }
}
export function updateMortgage(mortgage){
    return {
        type: UPDATE_MORTGAGE,
        payload:mortgage
    }
}
export function updateRent(rent){
    return {
        type: UPDATE_RENT,
        payload:rent
    }
}
export function updateImage(pImage){
    return {
        type: UPDATE_IMAGE,
        payload:pImage
    }
}



export default function reducer(state= initialState, action){
    switch(action.type){
        case UPDATE_PROPERTY_TYPE:
        return Object.assign({}, state, {propType:action.payload})
        
        case UPDATE_ADDRESS:
            return Object.assign({}, state, {propAdress: action.payload})

        case UPDATE_CITY:
            return Object.assign({} , state, {pCity: action.payload})

        case UPDATE_STATE:
            return Object.assign({}, state, {pState: action.payload})

        case UPDATE_ZIP:
            return Object.assign({}, state, {pZip: action.payload})

        case UPDATE_MORTGAGE:
            return Object.assign({}, state, {mortgage: action.payload})

        case UPDATE_RENT:
            return Object.assign({}, state, {rent: action.payload})

        case UPDATE_IMAGE:
            return Object.assign({}, state, {pImage: action.payload})
    
        default:
            return state
    }
};
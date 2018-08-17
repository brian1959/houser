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





export function updatePropertyType(proptype){
    return{
        type:UPDATE_PROPERTY_TYPE,
        payload: proptype
    }
}
export function updateAddress(propadress){
    return {
        type: UPDATE_ADDRESS,
        payload:propadress
    }
}
export function updateCity(pcity){
    return{
        type:UPDATE_CITY,
        payload: pcity
    }
}

export function updateState(pstate){
    return {
        type: UPDATE_STATE,
        payload:pstate
    }
}

export function updateZip(pzip){
    return {
        type: UPDATE_ZIP,
        payload:pzip
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
export function updateImage(pimage){
    return {
        type: UPDATE_IMAGE,
        payload:pimage
    }
}



export default function reducer(state= initialState, action){
    switch(action.type){
        case UPDATE_PROPERTY_TYPE:
        return Object.assign({}, state, {proptype:action.payload})
        
        case UPDATE_ADDRESS:
            return Object.assign({}, state, {propadress: action.payload})

        case UPDATE_CITY:
            return Object.assign({} , state, {pcity: action.payload})

        case UPDATE_STATE:
            return Object.assign({}, state, {pstate: action.payload})

        case UPDATE_ZIP:
            return Object.assign({}, state, {pzip: action.payload})

        case UPDATE_MORTGAGE:
            return Object.assign({}, state, {mortgage: action.payload})

        case UPDATE_RENT:
            return Object.assign({}, state, {rent: action.payload})

        case UPDATE_IMAGE:
            return Object.assign({}, state, {pimage: action.payload})
    
        default:
            return state
    }
};
import { SUB_SERVICE, SUB_SERVICE_SUCCESS, SUB_SERVICE_FAILURE, SUB_SERVICE_RESET } from './SubServiceType'

const initialState = {
    subServiceApi:{
    subServiceInProgress: false,
    subServiceSuccess:false,
    subServiceFailed:false,
    subService: [],
    }
}

const SubServiceReducers = (state = initialState, action) => {
    switch(action.type){
        case SUB_SERVICE:
            return{
                ...state,
                subServiceApi:{
                    subServiceInProgress: true,
                    subServiceSuccess:false,
                    subServiceFailed:false,
                    subService: [],
                    }
            
            }
            case SUB_SERVICE_SUCCESS:
                return{
                    ...state,
                    subServiceApi:{
                        subServiceInProgress: false,
                        subServiceSuccess:true,
                        subServiceFailed:false,
                        subService: action.payload,
                        }
                
                }
            case SUB_SERVICE_FAILURE:
                return{
                    ...state,
                    subServiceApi:{
                        subServiceInProgress: false,
                        subServiceSuccess:false,
                        subServiceFailed:true,
                        subService: [],
                        }
                
                }

                case SUB_SERVICE_RESET:
                    return{
                        ...state,
                        subServiceApi:{
                            subServiceInProgress: false,
                            subServiceSuccess:false,
                            subServiceFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default SubServiceReducers
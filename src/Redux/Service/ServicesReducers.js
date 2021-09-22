import { PROJECT_SERVICE, PROJECT_SERVICE_SUCCESS, PROJECT_SERVICE_FAILURE, PROJECT_SERVICE_RESET } from './ServicesType'

const initialState = {
    projectserviceApi:{
    projectserviceInProgress: false,
    projectserviceSuccess:false,
    projectserviceFailed:false,
    projectservice: [],
    }
}

const ServicesReducers = (state = initialState, action) => {
    switch(action.type){
        case PROJECT_SERVICE:
            return{
                ...state,
                projectserviceApi:{
                    projectserviceInProgress: true,
                    projectserviceSuccess:false,
                    projectserviceFailed:false,
                    projectservice: [],
                    }
            
            }
            case PROJECT_SERVICE_SUCCESS:
                return{
                    ...state,
                    projectserviceApi:{
                        projectserviceInProgress: false,
                        projectserviceSuccess:true,
                        projectserviceFailed:false,
                        projectservice: action.payload,
                        }
                
                }
            case PROJECT_SERVICE_FAILURE:
                return{
                    ...state,
                    projectserviceApi:{
                        projectserviceInProgress: false,
                        projectserviceSuccess:false,
                        projectserviceFailed:true,
                        projectservice: [],
                        }
                
                }

                case PROJECT_SERVICE_RESET:
                    return{
                        ...state,
                        projectserviceApi:{
                            projectserviceInProgress: false,
                            projectserviceSuccess:false,
                            projectserviceFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default ServicesReducers
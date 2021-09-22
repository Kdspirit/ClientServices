import { PROJECT_INDUSTRIES, PROJECT_INDUSTRIES_SUCCESS, PROJECT_INDUSTRIES_FAILURE, PROJECT_INDUSTRIES_RESET } from './ProjectIndustriesTypes'
const initialState = {
    projectsIndustriesGetApi:{
    projectsIndustriesInProgress: false,
    projectsIndustriesSuccess:false,
    projectsIndustriesFailed:false,
    projectsIndustries: [],
    }
}

const IndustriesReducer = (state = initialState, action) => {
    switch(action.type){
        case PROJECT_INDUSTRIES:
            return{
                ...state,
                projectsIndustriesGetApi:{
                    projectsIndustriesInProgress: true,
                    projectsIndustriesSuccess:false,
                    projectsIndustriesFailed:false,
                    projectsIndustries: [],
                    }

            }
            case PROJECT_INDUSTRIES_SUCCESS:
                return{
                    ...state,
                    projectsIndustriesGetApi:{
                        projectsIndustriesInProgress: false,
                        projectsIndustriesSuccess:true,
                        projectsIndustriesFailed:false,
                        projectsIndustries: action.payload,
                        }

                }
            case PROJECT_INDUSTRIES_FAILURE:
                return{
                    ...state,
                    projectsIndustriesGetApi:{
                        projectsIndustriesInProgress: false,
                        projectsIndustriesSuccess:false,
                        projectsIndustriesFailed:true,
                        projectsIndustries: [],
                        }

                }
                case PROJECT_INDUSTRIES_RESET:
                    return{
                        ...state,
                        projectsIndustriesGetApi:{
                            projectsIndustriesInProgress: false,
                            projectsIndustriesSuccess:false,
                            projectsIndustriesFailed:false,
                            }
                    }
            default: return state 
    }
}

export default IndustriesReducer
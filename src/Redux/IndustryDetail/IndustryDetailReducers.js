import { PROJECT_INDUSTRIES_DETAIL, PROJECT_INDUSTRIES_DETAIL_SUCCESS, PROJECT_INDUSTRIES_DETAIL_FAILURE, PROJECT_INDUSTRIES_DETAIL_RESET } from './IndustryDetailTypes'
const initialState = {
    projectsIndustriesDetailsGetApi:{
    projectsIndustriesDetailsInProgress: false,
    projectsIndustriesDetailsSuccess:false,
    projectsIndustriesDetailsFailed:false,
    projectsIndustriesDetails: [],
    }
}

const IndustriesDetailsReducer = (state = initialState, action) => {
    switch(action.type){
        case PROJECT_INDUSTRIES_DETAIL:
            return{
                ...state,
                projectsIndustriesDetailsGetApi:{
                    projectsIndustriesDetailsInProgress: true,
                    projectsIndustriesDetailsSuccess:false,
                    projectsIndustriesDetailsFailed:false,
                    projectsIndustriesDetails: [],
                    }

            }
            case PROJECT_INDUSTRIES_DETAIL_SUCCESS:
                return{
                    ...state,
                    projectsIndustriesDetailsGetApi:{
                        projectsIndustriesDetailsInProgress: false,
                        projectsIndustriesDetailsSuccess:true,
                        projectsIndustriesDetailsFailed:false,
                        projectsIndustriesDetails: action.payload,
                        }

                }
            case PROJECT_INDUSTRIES_DETAIL_FAILURE:
                return{
                    ...state,
                    projectsIndustriesDetailsGetApi:{
                        projectsIndustriesDetailsInProgress: false,
                        projectsIndustriesDetailsSuccess:false,
                        projectsIndustriesDetailsFailed:true,
                        projectsIndustriesDetails: [],
                        }

                }
                case PROJECT_INDUSTRIES_DETAIL_RESET:
                    return{
                        ...state,
                        projectsIndustriesDetailsGetApi:{
                            projectsIndustriesDetailsInProgress: false,
                            projectsIndustriesDetailsSuccess:false,
                            projectsIndustriesDetailsFailed:false,
                            }
                    }
            default: return state 
    }
}

export default IndustriesDetailsReducer
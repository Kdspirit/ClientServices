import { TEAM_MEMBER, TEAM_MEMBER_SUCCESS, TEAM_MEMBER_FAILURE, TEAM_MEMBER_RESET } from './TeamMemberTypes'
const initialState = {
    teamMemberGetApi:{
    teamMemberInProgress: false,
    teamMemberSuccess:false,
    teamMemberFailed:false,
    teamMember: [],
    }
}

const TeamMemberReducer = (state = initialState, action) => {
    switch(action.type){
        case TEAM_MEMBER:
            return{
                ...state,
                teamMemberGetApi:{
                    teamMemberInProgress: true,
                    teamMemberSuccess:false,
                    teamMemberFailed:false,
                    teamMember: [],
                    }

            }
            case TEAM_MEMBER_SUCCESS:
                return{
                    ...state,
                    teamMemberGetApi:{
                        teamMemberInProgress: false,
                        teamMemberSuccess:true,
                        teamMemberFailed:false,
                        teamMember: action.payload,
                        }

                }
            case TEAM_MEMBER_FAILURE:
                return{
                    ...state,
                    teamMemberGetApi:{
                        teamMemberInProgress: false,
                        teamMemberSuccess:false,
                        teamMemberFailed:true,
                        teamMember: [],
                        }

                }
                case TEAM_MEMBER_RESET:
                    return{
                        ...state,
                        teamMemberGetApi:{
                            teamMemberInProgress: false,
                            teamMemberSuccess:false,
                            teamMemberFailed:false,
                            }
                    }
            default: return state 
    }
}

export default TeamMemberReducer
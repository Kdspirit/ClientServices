import axios from 'axios';
import { TEAM_MEMBER, TEAM_MEMBER_SUCCESS, TEAM_MEMBER_FAILURE, TEAM_MEMBER_RESET } from './TeamMemberTypes'
export const teamMember = () => {
    return{
        type: TEAM_MEMBER
    }
}

export const teamMemberSuccess = (teamMemberData) => {
    return{
        type: TEAM_MEMBER_SUCCESS,
        payload: teamMemberData
    }
}
export const teamMemberFailure = (error) => {
    return{
        type: TEAM_MEMBER_FAILURE,
        payload: error
    }
}

export const teamMemberReset = () => {
    return{
        type: TEAM_MEMBER_RESET
    }
}

export const hitteamMemberApi = () => {
    // console.log('executed from user order action ....', data,internshipPackageId, emiStatus)
    const raw_data = {
    };
    console.log('jk',raw_data)
    return (dispatch) => {
        dispatch(teamMember)
        axios.post(`https://dev.infoidol.com/admin/WebApi/team_members`,raw_data).then( response => {
                const teamMember = response.data
                console.log('response internship Registeration',teamMember)
                dispatch(teamMemberSuccess(teamMember))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(teamMemberFailure(errorMsg))
        })
    }
}

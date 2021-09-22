import axios from 'axios';
import { PROJECT_INDUSTRIES, PROJECT_INDUSTRIES_SUCCESS, PROJECT_INDUSTRIES_FAILURE, PROJECT_INDUSTRIES_RESET } from './ProjectIndustriesTypes'
export const projectIndustries = () => {
    return{
        type: PROJECT_INDUSTRIES
    }
}

export const projectIndustriesSuccess = (projectIndustriesData) => {
    return{
        type: PROJECT_INDUSTRIES_SUCCESS,
        payload: projectIndustriesData
    }
}
export const projectIndustriesFailure = (error) => {
    return{
        type: PROJECT_INDUSTRIES_FAILURE,
        payload: error
    }
}

export const projectIndustriesReset = () => {
    return{
        type: PROJECT_INDUSTRIES_RESET
    }
}

export const hitprojectIndustriesApi = () => {
    // console.log('executed from hit project Industrie sApi ....',)
    const raw_data = {
    };
    // console.log('jk',raw_data)
    return (dispatch) => {
        dispatch(projectIndustries)
        axios.post(`https://dev.infoidol.com/admin/WebApi/project_industries`,raw_data).then( response => {
                const projectIndustriesResponse = response.data
                console.log('project Industries Response',projectIndustriesResponse)
                dispatch(projectIndustriesSuccess(projectIndustriesResponse))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(projectIndustriesFailure(errorMsg))
        })
    }
}

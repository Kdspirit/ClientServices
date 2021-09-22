import axios from 'axios';
import { PROJECT_INDUSTRIES_DETAIL, PROJECT_INDUSTRIES_DETAIL_SUCCESS, PROJECT_INDUSTRIES_DETAIL_FAILURE, PROJECT_INDUSTRIES_DETAIL_RESET } from './IndustryDetailTypes'

export const projectIndustriesDetails = () => {
    return{
        type: PROJECT_INDUSTRIES_DETAIL
    }
}

export const projectIndustriesDetailsSuccess = (projectIndustriesDetailsData) => {
    return{
        type: PROJECT_INDUSTRIES_DETAIL_SUCCESS,
        payload: projectIndustriesDetailsData
    }
}
export const projectIndustriesDetailsFailure = (error) => {
    return{
        type: PROJECT_INDUSTRIES_DETAIL_FAILURE,
        payload: error
    }
}

export const projectIndustriesDetailsReset = () => {
    return{
        type: PROJECT_INDUSTRIES_DETAIL_RESET
    }
}

export const hitprojectIndustriesDetailsApi = (industry_id) => {
    // console.log('executed from hit project Industrie sApi ....',)
    const raw_data = {
        industry_id : 'industry_id'
    };
    // console.log('jk',raw_data)
    return (dispatch) => {
        dispatch(projectIndustriesDetails)
        axios.post(`https://dev.infoidol.com/admin/WebApi/sub_industries `,raw_data).then( response => {
                const projectIndustriesDetailsResponse = response.data
                console.log(' Industries details Response',projectIndustriesDetailsResponse)
                dispatch(projectIndustriesDetailsSuccess(projectIndustriesDetailsResponse))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(projectIndustriesDetailsFailure(errorMsg))
        })
    }
}

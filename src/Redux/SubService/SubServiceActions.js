import axios from 'axios';
import {SUB_SERVICE,SUB_SERVICE_SUCCESS,SUB_SERVICE_FAILURE,SUB_SERVICE_RESET } from './SubServiceType'

export const subService = () => {
    return{
        type:SUB_SERVICE
    }
}

export const subServiceSuccess = (subServiceData) => {
    return{
        type:SUB_SERVICE_SUCCESS,
        payload: subServiceData
    }
}
export const subServiceFailure = (error) => {
    return{
        type:SUB_SERVICE_FAILURE,
        payload: error
    }
}

export const subServiceReset = () => {
    return{
        type:SUB_SERVICE_RESET
    }
}



export const hitsubServiceAPI = (service_id) => {
    return (dispatch) => {
        dispatch(subService())
            // axios.post(`${BASE_URL}withdraw`,{
            axios.post(`https://dev.infoidol.com/admin/WebApi/project_sub_services`,{
                "service_id":service_id
        }).then( response => {
            const subServiceResponse = response.data
            dispatch(subServiceSuccess(subServiceResponse))
            console.log('response',response.data)
            setTimeout(function(){
                dispatch(subServiceReset())
            }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(subServiceFailure(errorMsg))
    })
    }
}


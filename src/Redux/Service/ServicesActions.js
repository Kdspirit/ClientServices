import axios from 'axios';
import {PROJECT_SERVICE,PROJECT_SERVICE_SUCCESS,PROJECT_SERVICE_FAILURE,PROJECT_SERVICE_RESET } from './ServicesType'

export const projectservice = () => {
    return{
        type:PROJECT_SERVICE
    }
}

export const projectserviceSuccess = (projectserviceData) => {
    return{
        type:PROJECT_SERVICE_SUCCESS,
        payload: projectserviceData
    }
}
export const projectserviceFailure = (error) => {
    return{
        type:PROJECT_SERVICE_FAILURE,
        payload: error
    }
}

export const projectserviceReset = () => {
    return{
        type:PROJECT_SERVICE_RESET
    }
}



export const hitprojectserviceAPI = () => {
    return (dispatch) => {
        dispatch(projectservice())
            // axios.post(`${BASE_URL}withdraw`,{
            axios.post(`https://dev.infoidol.com/admin/WebApi/project_services`,{
        }).then( response => {
            const projectserviceResponse = response.data
            dispatch(projectserviceSuccess(projectserviceResponse))
            console.log('response',response.data)
            setTimeout(function(){
                dispatch(projectserviceReset())
            }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(projectserviceFailure(errorMsg))
    })
    }
}


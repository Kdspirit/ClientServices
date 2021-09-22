import axios from 'axios';
import { GET_IN_TOUCH_DETAIL, GET_IN_TOUCH_DETAIL_SUCCESS, GET_IN_TOUCH_DETAIL_FAILURE, GET_IN_TOUCH_DETAIL_RESET } from './GetInTouchTypes'

export const getInTouch = () => {
    return{
        type: GET_IN_TOUCH_DETAIL
    }
}

export const getInTouchSuccess = (getInTouchData) => {
    return{
        type: GET_IN_TOUCH_DETAIL_SUCCESS,
        payload: getInTouchData
    }
}
export const getInTouchFailure = (error) => {
    return{
        type: GET_IN_TOUCH_DETAIL_FAILURE,
        payload: error
    }
}

export const getInTouchReset = () => {
    return{
        type: GET_IN_TOUCH_DETAIL_RESET
    }
}

export const hitgetInTouchApi = (data) => {
    // console.log('executed from hit project Industrie sApi ....',)
    const raw_data = {
        "name": data.name,
        "email": data.email,
        "mobile": data.mobile,
        "overview": data.overview
    };
    return (dispatch) => {
        dispatch(getInTouch)
        axios.post(`https://infoidol.com/demo/WebApi/get_in_touch `,raw_data).then( response => {
                const getInTouchResponse = response.data
                console.log(' Industries details Response',getInTouchResponse)
                dispatch(getInTouchSuccess(getInTouchResponse))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getInTouchFailure(errorMsg))
        })
    }
}

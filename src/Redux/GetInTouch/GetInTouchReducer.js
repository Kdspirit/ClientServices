import { GET_IN_TOUCH_DETAIL, GET_IN_TOUCH_DETAIL_SUCCESS, GET_IN_TOUCH_DETAIL_FAILURE, GET_IN_TOUCH_DETAIL_RESET } from './GetInTouchTypes'
const initialState = {
    getInTouchGetApi:{
    getInTouchInProgress: false,
    getInTouchSuccess:false,
    getInTouchFailed:false,
    getInTouch: [],
    }
}

const GetInTouchReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_IN_TOUCH_DETAIL:
            return{
                ...state,
                getInTouchGetApi:{
                    getInTouchInProgress: true,
                    getInTouchSuccess:false,
                    getInTouchFailed:false,
                    getInTouch: [],
                    }

            }
            case GET_IN_TOUCH_DETAIL_SUCCESS:
                return{
                    ...state,
                    getInTouchGetApi:{
                        getInTouchInProgress: false,
                        getInTouchSuccess:true,
                        getInTouchFailed:false,
                        getInTouch: action.payload,
                        }

                }
            case GET_IN_TOUCH_DETAIL_FAILURE:
                return{
                    ...state,
                    getInTouchGetApi:{
                        getInTouchInProgress: false,
                        getInTouchSuccess:false,
                        getInTouchFailed:true,
                        getInTouch: [],
                        }

                }
                case GET_IN_TOUCH_DETAIL_RESET:
                    return{
                        ...state,
                        getInTouchGetApi:{
                            getInTouchInProgress: false,
                            getInTouchSuccess:false,
                            getInTouchFailed:false,
                            }
                    }
            default: return state 
    }
}

export default GetInTouchReducer
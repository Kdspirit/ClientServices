import { combineReducers } from "redux"
import ServicesReducers from "./Service/ServicesReducers"
import TeamMemberReducer from "./TeamMember/TeamMemberReducers"
import IndustriesReducer from "./ProjectIndustries/ProjectIndustriesReducers"
import SubServiceReducers from "./SubService/SubServiceReducers"
import IndustriesDetailsReducer from "./IndustryDetail/IndustryDetailReducers"
import GetInTouchReducer from "./GetInTouch/GetInTouchReducer"

const rootReducer = combineReducers({
    ServicesReducers:ServicesReducers,
    TeamMemberReducers:TeamMemberReducer,
    Industries: IndustriesReducer,
    SubService:SubServiceReducers,
    IndustriesDetails: IndustriesDetailsReducer,
    GetInTouch: GetInTouchReducer

})
export default rootReducer

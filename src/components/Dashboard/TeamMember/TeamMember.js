import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { hitteamMemberApi } from '../../../Redux/TeamMember/TeamMemberAction';
import Slider from "react-slick";
import './TeamMember.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const TeamMember = (props) => {
    // console.log('team', props)
    const [teammem, setTeammem] = useState()
    // const [settings, setSetting] = useState()
    // useEffect(() => {
    //     const mediaQuery = window.matchMedia('(max-width: 500px)')
    //     if(mediaQuery.matches){
    //         setSetting ( {
    //             // dots: true,
    //             infinite: true,
    //             speed: 500,
    //             slidesToShow: 1.1,
    //             slidesToScroll: 1,
    //             adaptiveHeight: true,
    //             arrows: true,
    //             // className: 'VideoTrendingsliderStyles'
    //             }
    //         )
    //     }
    //     else{
    //         setSetting ( {
    //             // dots: true,
    //             infinite: true,
    //             speed: 500,
    //             slidesToShow: 4,
    //             slidesToScroll: 3,
    //             adaptiveHeight: true,
    //             arrows: true,
    //             className: ''
    //             })
    //     }
    // }, [])
    const settings = {
        // dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
     arrows: false,
      };
    useEffect(() => {
        props.hitteamMemberApi()
    }, [])

    useEffect(() => {
        if(props.TeamMember.TeamMemberReducers.teamMemberGetApi.teamMemberSuccess &&
            props.TeamMember.TeamMemberReducers.teamMemberGetApi.teamMember.data){
                setTeammem(props.TeamMember.TeamMemberReducers.teamMemberGetApi.teamMember.data)
                // console.log('setTeam console',props.TeamMember.TeamMemberReducers.teamMemberGetApi.teamMember.data)
            }
    },[props.TeamMember.TeamMemberReducers.teamMemberGetApi.teamMemberSuccess])

    return (
        <div style={{marginBottom:'3vh'}}>
            <p className="heading-team">Team Members</p>
            <Slider {...settings}>
            {
                teammem && teammem.map((teamMemberelem,teamindex) => {
                    // console.log('teamMemberelem',teamMemberelem,teamindex)
                    return(
                        <div className="team-wrap" >
                            <img className="img-team-member" src={teamMemberelem.image} alt="" />
                            <div className="name-des">
                                <p className="team-name" style={{marginBottom:'1vh'}}>{teamMemberelem.name}</p>
                                <p className="team-des">{teamMemberelem.designation}</p> 
                            </div>
                            
                        </div>
                    )
                })
            }
            </Slider>
            {/* <div className="team-wrap">
                
            </div> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeeec internship details', state.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects);
    return{
    TeamMember:state
    }
    }
    const mapDispatchToProps = dispatch => {
    return {
        hitteamMemberApi : () => dispatch(hitteamMemberApi())
    }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(TeamMember)
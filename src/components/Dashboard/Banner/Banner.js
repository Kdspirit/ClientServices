import React from 'react'
import office from '../../Assets/office.jpg'
// import office from '../../Assets/Themeimage.gif'

const Banner = (props) => {
    return (
        <section className="banner-container">
            <img  src={office}  alt="" className="banner-img" />
        </section>
    )
}

// const mapStateToProps = (state) => {
//     // console.log('stateeeeeec internship details', state.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects);
//   return{
//     InternshipRegisterationApi :state
//   }
//   }
//   const mapDispatchToProps = dispatch => {
//   return {
//     hitprojectserviceAPI : () => dispatch(hitprojectserviceAPI()),
//   }
//   }
  export default Banner

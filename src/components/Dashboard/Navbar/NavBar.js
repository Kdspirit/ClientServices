import{ React,useEffect,useState }from 'react'
import { Container,Navbar,Nav,DropdownButton,Dropdown } from 'react-bootstrap';
import CallIcon from '@material-ui/icons/Call';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import infoidologo from '../../../Assets/complogo1.png'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import './Navbar.css'
import { hitprojectserviceAPI } from '../../../Redux/Service/ServicesActions.js';
import { hitprojectIndustriesApi } from '../../../Redux/ProjectIndustries/ProjectIndustriesAction';

const NavBar = (props) => {
    console.log( 'NavBar props', props)

    const [NavBarservices,setNavBarServices] = useState()
    const [NavBarindustries,setNavBarIndustries] = useState()

    useEffect(() => {
        props.hitprojectserviceAPI()
        props.hitprojectIndustriesApi()
    }, [])

    useEffect(() =>{
        if(props.NavBarServices.ServicesReducers.projectserviceApi.projectserviceSuccess && 
            props.NavBarServices.ServicesReducers.projectserviceApi.projectservice.data){
                // setNavBarIndustries(props.NavBarServices.Industries.projectsIndustriesGetApi.projectsIndustries.data)
                setNavBarServices( props.NavBarServices.ServicesReducers.projectserviceApi.projectservice.data)
                // console.log( 'set NavBar Services', props.NavBarServices)
            }
    },[props.NavBarServices.ServicesReducers.projectserviceApi.projectserviceSuccess])
    
    useEffect(() => {
        if(props.NavBarServices.Industries.projectsIndustriesGetApi.projectsIndustriesSuccess &&
            props.NavBarServices.Industries.projectsIndustriesGetApi.projectsIndustries.data){
                setNavBarIndustries(props.NavBarServices.Industries.projectsIndustriesGetApi.projectsIndustries.data)
            }
    }, [props.NavBarServices.Industries.projectsIndustriesGetApi.projectsIndustriesSuccess])

    const handleNavServiceClick = (id) => {
        sessionStorage.setItem('service_id',id)
    }
    const handleNavIndustryClick = (id) => {
        sessionStorage.setItem('industry_id',id)
    }
    return (
        <section>
            <section>
            <Navbar className="navbar-wrap" expand="lg">
                <Container>
                <Navbar.Brand href="">
            <img
                src={infoidologo}
                width="184vw"
                height="45"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="navbar-collapse">
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/#dashboard'>Home</Nav.Link>
                        <DropdownButton id="dropdown-basic-button" title="Services">
                        {
                            NavBarservices && NavBarservices.map((elem,index) => {
                                // console.log('navbar elem',elem)
                                return(
                                    <section className="Dropdown-navbar-container">
                                            {/* <Link to='/service-detail' style={{textDecoration:'none'}}> */}
                                                <Dropdown.Item style={{background: 'none',border: '0px'}} href='/service-detail'  onClick={() => handleNavServiceClick(elem.id)}>{elem.title}</Dropdown.Item>
                                            {/* </Link> */}
                                    </section>
                                )
                            })
                        }
                        </DropdownButton>

                        <DropdownButton id="dropdown-basic-button" title="Industries">
                        {
                            NavBarindustries && NavBarindustries.map((Industrieselem,Industriesindex) => {
                                console.log('navbar Industries elem',Industrieselem)
                                return(
                                    <section className="Dropdown-navbar-container">
                                            {/* <Link to='/industry-detail' style={{textDecoration:'none'}}> */}
                                                <Dropdown.Item 
                                                    style={{background: 'none',border: '0px'}}
                                                    href='/industry-detail' 
                                                    onClick={() => handleNavIndustryClick(Industrieselem.id)}>
                                                        {Industrieselem.industries}
                                                </Dropdown.Item>
                                            {/* </Link> */}
                                    </section>
                                )
                            })
                        }
                        </DropdownButton>
                    </Nav>
                    </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </section>
            
        </section>
    )
}


const mapStateToProps = (state) => {
    return{
        NavBarServices :state
    }
    }
    const mapDispatchToProps = dispatch => {
    return {
        hitprojectserviceAPI : () => dispatch(hitprojectserviceAPI()),
        hitprojectIndustriesApi: () => dispatch(hitprojectIndustriesApi()),
    }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

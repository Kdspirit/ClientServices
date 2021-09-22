import React,{useEffect, useState,} from 'react'
import './SubService.css'

const SubService = (props) => {
    console.log('subservice',props)
    const [subService, setsubService] = useState()
    const [flag ,setflag]= useState(true)
    
    useEffect(()=>{
        if(props.SubService.SubService.subServiceApi.subServiceSuccess && 
            props.SubService.SubService.subServiceApi.subService.data.sub_service){
                setsubService(props.SubService.SubService.subServiceApi.subService.data.sub_service)
            }
    },[props.SubService.SubService.subServiceApi.subServiceSuccess])

    // useEffect(() => {
    //     if(props.SubService.SubService.subServiceApi.subService.data.sub_service == 'sub_service[odd]' &&
    //         props.SubService.SubService.subServiceApi.subService.data.sub_service == 'sub_service[odd]'){
    //             setflag(!flag)
    //         }
    // }, [])
    return (
        <div>
            {
                subService && subService.map((subServiceElem, subServiceindex) => {
                    return(
                        <section>
                            {
                                subServiceindex % 2 == '0' ?
                                <div className="sub-service-wrap1">
                                    <section className="sub-sectionblue2">
                                        <img src={subServiceElem.sub_image} alt="" />
                                    </section>
                                    <section className="sub-sectionblue1">
                                        <p className="sub-service-name">{subServiceElem.sub_service}</p>
                                        <p className="sub-service-description">{subServiceElem.sub_description}</p>
                                        {
                                            subServiceElem.work_strategy && subServiceElem.work_strategy.map((WSelem,Wsindex) =>{
                                                return(
                                                    <div>
                                                        <li className="workStrategy">{WSelem}</li>
                                                    </div>
                                                )
                                            })
                                        }
                                    </section>
                                
                            </div>
                            :

                            <div className="sub-service-wrap2">
                                
                                <section className="sub-sectionwhite1">
                                    <p className="sub-service-name2">{subServiceElem.sub_service}</p>
                                    <p className="sub-service-description2">{subServiceElem.sub_description}</p>
                                    {
                                        subServiceElem.work_strategy && subServiceElem.work_strategy.map((WSelem,Wsindex) =>{
                                            return(
                                                <div>
                                                    <li className="workStrategy2">{WSelem}</li>
                                                </div>
                                            )
                                        })
                                    }
                                </section>
                                <section className="sub-sectionwhite2">
                                    <img src={subServiceElem.sub_image} alt="" />
                                </section>
                            </div>
                            }
                            
            
                            
                        </section>
                    )
                })
            }
        </div>
    )
}

export default SubService

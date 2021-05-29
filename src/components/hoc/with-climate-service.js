import React from 'react'
import {ClimateServiceConsumer} from '../climate-service-context'

const withClimateService = () => (Wraper,mapMathodsToProps) => {
return (props) => {
    return(
<ClimateServiceConsumer>
{
    (climateService) =>{
        const serviceProps = mapMathodsToProps(climateService)
        return <Wraper {...props} {...serviceProps} />
    }
}
</ClimateServiceConsumer>
    )
}
}

export default withClimateService
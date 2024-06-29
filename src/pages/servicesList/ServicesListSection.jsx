import React from 'react';
import '../../App.css';
import './ServicesListSection.scss';

import ServiceListItem from '../../components/ServiceCard/ServiceListItem';
import { services } from '../../components/ServiceCard/Services';

function ServicesListSection() {
    return (

        <div className='servicesList-container'>

            <div className='servicesList-header'>Services</div>

            {services.map(service => (
                <ServiceListItem 
                    key={service.id} 
                    id={service.id}
                    image={service.image} 
                    title={service.title} 
                    guest={service.guest}
                    description={service.description}
                />
            ))}

        </div>

    )
}

export default ServicesListSection
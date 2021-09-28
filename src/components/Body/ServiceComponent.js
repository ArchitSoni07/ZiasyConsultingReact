import React from 'react'

function ServiceComponent({ name, desc, img }) {
    return (
        <div>
            <>
                <img src={img} class="service-img" />
                <h4>{name}</h4>
                <p>
                    {desc}
                </p>
            </>



        </div>
    )
}

export default ServiceComponent

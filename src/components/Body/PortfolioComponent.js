import React from 'react'

function PortfolioComponent({img,descTitle,desc,descFooter,websiteLink}) {
    return (
        <>  
            <div className="col-md-6">
            <img src={img} class="img-fluid" />
            </div>
            <div class="col-md-6 portfolios">
            <p className="pro-title">{descTitle}</p>
            <p>{desc}</p>
            <p>{descFooter}</p>
            <div class="read-more"><a href={websiteLink}><i class="icofont-arrow-right"></i> VISIT WEBSITE</a></div>
            </div>
        </>
    )
}

export default PortfolioComponent

import React from 'react';
import './pricing.scss'

function Pricing() {
    return (
        <section className = 'pricing-section' id = 'pricing'>
            <h2 className = 'sub-title'> Pricing</h2>
            <h3>Avatar Retexture</h3>
            <div className = 'retexture-section'>
                <div className = 'details border-right'>
                    <p>Simple Recoloring</p>
                    <p>Starting at 25€</p>
                </div>
                <div className = 'details border-right border-left'>
                    <p>Retexturing (Additional Markings/Patterns)</p>
                    <p>Starting at 45€</p>
                </div>
                <div className = 'details border-left'>
                    <p>Complex Designs</p>
                    <p>Starting at 80€</p>
                </div>
            </div>
            <h3>3D Modeling</h3>
            <div className = 'modeling-section'>
                <div className = 'details border-right'>
                    <p>Simple Accessories (Necklace, Bracelet etc.)</p>
                    <p>Starting at 10€</p>
                </div>
                <div className = 'details border-right border-left'>
                    <p>Clothing</p>
                    <p>Starting at 40€</p>
                </div>
                <div className = 'details border-left'>
                    <p>Complex Equipment</p>
                    <p>Starting at 60€</p>
                </div>
            </div>
            <p>
                Please be aware that all the prices are displayed in euros and the amount that
                you'll have to pay might vary depending the current conversion rates!
            </p>
        </section>
    )
}

export default Pricing;
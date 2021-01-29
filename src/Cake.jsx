import React from 'react';
import './Cake.scss';

const Cake = () => {
    return (
        <div>
            <div class="cake">
                <div class="plate"></div>
                <div class="layer layer-bottom"></div>
                <div class="layer layer-middle"></div>
                <div class="layer layer-top"></div>
                <div class="icing"></div>
                <div class="drip drip1"></div>
                <div class="drip drip2"></div>
                <div class="drip drip3"></div>
                <div class="candle">
                    <div class="flame"></div>
                </div>
            </div>
        </div>
    )
}

export default Cake;
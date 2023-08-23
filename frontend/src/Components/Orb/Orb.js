import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowsSize } from '../../utils/useWindowsSize';


function Orb() {

    const {width, height} = useWindowsSize()

    console.log(width,height)

    const moveOrb = keyframes`
         0%{
            transform: translate(0,0);

         }
         50%{
            transform: translate(${width/1.2}px,${height/2}px);

         }
         100%{
            transform: translate(0,0);

         }
    `;


    const OrbStyled = styled.div`
        height: 70vh;
        width: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -35vh; /* Adjusted to center the orb */
        margin-top: -35vh; /* Adjusted to center the orb */
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(400px);
        animation: ${moveOrb} 10s alternate linear infinite;

    `;
  
    return (
        <OrbStyled>
            {/* You can add content or leave it empty */}
        </OrbStyled>
    );
}

export default Orb;

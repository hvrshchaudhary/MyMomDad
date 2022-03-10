import { css } from "styled-components";

export const smallScreen = (props) => {
    return css`
        @media only screen and (max-width: 1670px) {
            ${props}
        }
    `;
}
export const smallerScreen = (props) => {
    return css`
        @media only screen and (max-width: 1500px) {
            ${props}
        }
    `;
}
export const tablets = (props) => {
    return css`
        @media only screen and (max-width: 1200px) {
            ${props}
        }
    `;
}
export const mediumTablets = (props) => {
    return css`
        @media only screen and (max-width: 1050px) {
            ${props}
        }
    `;
}
export const smallTablets = (props) => {
    return css`
        @media only screen and (max-width: 910px) {
            ${props}
        }
    `;
}
export const smallerTablets = (props) => {
    return css`
        @media only screen and (max-width: 810px) {
            ${props}
        }
    `;
}
export const bigMobiles = (props) => {
    return css`
        @media only screen and (max-width: 562px) {
            ${props}
        }
    `;
}
export const mobiles = (props) => {
    return css`
        @media only screen and (max-width: 470px) {
            ${props}
        }
    `;
}
export const smallMobiles = (props) => {
    return css`
        @media only screen and (max-width: 420px) {
            ${props}
        }
    `;
}
import { createGlobalStyle } from "styled-components";
import UhBeecharming from './UhBeecharming.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'UhBeecharming';
        src: ${UhBeecharming}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    // Main Colors
    --primaryColor: #e0e0e0;
    --secondaryColor: #ffffff;

    --primaryColorPastelDark25opacity: #e0e0e0;

    --primaryColorPastelDark: #877762;
    --primaryColorPastelLight: #c4a67d;

    --primaryColorPastel: #f8b557;

    --primaryColorVivid: #38aeff;

    // Texts
    --labelColor: #8e8e8e;
    --h1Color: #202020;
    --h2Color: #555555;

    // Borders
    --borderSelected: #797979;
    --borderNOTSelected: #e0e0e0;

    // Opacity Button:
    --buttonOpacity50BG: #45b3ff;
    --buttonOpacity50Color: #2c6084;

    // Buttons
    --buttonNotFocusColor: #fff;
    --buttonNotFocusBG: #5cbcff;
    --buttonFocusBG: #008fff;
    --buttonFocusCOLOR: #fff;
    --buttonActiveBG: #005995;

    --default:  #0097ff;

    --menuBG: #fff;
    --notesBG: #0097ff;
    --menuLiBG: #bfe5ff;
    --menuLiColor: #000; 

    --activeElement: #45b4ff;
}
`;
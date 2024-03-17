import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

export const RecipeCard = () => {
    return (
        <TouchableOpacity style={[localStyles.container]}>
            <ImageBackground source={require('../../assets/images/receipt_image.jpg')} resizeMode='cover'
                             style={{flex: 1}}>
                <Text style={[localStyles.textCountry]}>Japan</Text>
                <Text style={[localStyles.textRecipe]}>Chicken Porridge</Text>
                <Text style={[localStyles.textAuthor]}>By Andrew Jun</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
};

let localStyles = StyleSheet.create({
    container: {
        display: 'flex',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    },

    textCountry: {},

    textRecipe: {},

    textAuthor: {}
});

// /* Chicken */
//
// margin: 0 auto;
// width: 161px;
// height: 140px;
//
// background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%), url(image.png), #001E00;
// border-radius: 10px;
//
// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
//
//
// /* Save */
//
// position: absolute;
// left: 77.64%;
// right: 6.21%;
// top: 5.71%;
// bottom: 75.71%;
//
//
//
// /* Rectangle 189 */
//
// position: absolute;
// left: 77.64%;
// right: 6.21%;
// top: 5.71%;
// bottom: 75.71%;
//
// /* Alert */
// background: #F85657;
// backdrop-filter: blur(4px);
// /* Note: backdrop-filter has minimal browser support */
// border-radius: 6px;
//
//
// /* fluent:heart-20-filled */
//
// position: absolute;
// width: 18px;
// height: 18px;
// left: calc(50% - 18px/2 + 57.5px);
// top: calc(50% - 18px/2 - 49px);
//
//
//
// /* Vector */
//
// position: absolute;
// left: 10%;
// right: 10%;
// top: 15%;
// bottom: 15%;
//
// /* White */
// background: #FFFFFF;
//
//
// /* Text */
//
// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;
//
// position: absolute;
// left: 6.21%;
// right: 5.59%;
// top: 71.43%;
// bottom: 6.43%;
//
//
//
// /* Yangnyeom Chicken */
//
// width: 142px;
// height: 17px;
//
// font-family: 'Cabin';
// font-style: normal;
// font-weight: 600;
// font-size: 13px;
// line-height: 17px;
// /* identical to box height, or 130% */
//
// /* White */
// color: #FFFFFF;
//
//
// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;
//
//
// /* Text */
//
// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-items: center;
// padding: 0px;
// gap: 40px;
//
// width: 142px;
// height: 14px;
//
//
// /* Inside auto layout */
// flex: none;
// order: 1;
// align-self: stretch;
// flex-grow: 0;
//
//
// /* Lunch */
//
// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 4px;
//
// margin: 0 auto;
// width: 111px;
// height: 14px;
//
//
// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 1;
//
//
// /* By Andrew Jun */
//
// width: 111px;
// height: 14px;
//
// font-family: 'Montserrat';
// font-style: normal;
// font-weight: 400;
// font-size: 8.5px;
// line-height: 17px;
// /* or 199% */
//
// /* Text Color/200 */
// color: #B2BBB2;
//
//
// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 1;
//
//
// /* Rate */
//
// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: flex-end;
// padding: 0px;
// gap: 4px;
//
// margin: 0 auto;
// width: 31px;
// height: 12px;
//
//
// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
//
//
// /* Icon/Star */
//
// width: 12px;
// height: 12px;
//
//
// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
//
//
// /* Group */
//
// position: absolute;
// left: 8.34%;
// right: 8.34%;
// top: 10.42%;
// bottom: 10.42%;
//
//
//
// /* Vector */
//
// position: absolute;
// left: 8.34%;
// right: 8.34%;
// top: 10.42%;
// bottom: 10.42%;
//
// /* Secondary */
// background: #FFA909;
// /* Secondary */
// border: 0.8px solid #FFA909;
//
//
// /* 5.0 */
//
// width: 15px;
// height: 11px;
//
// font-family: 'Montserrat';
// font-style: normal;
// font-weight: 500;
// font-size: 10px;
// line-height: 10px;
// /* or 100% */
// text-align: center;
// letter-spacing: -0.02em;
//
// /* Secondary */
// color: #FFA909;
//
//
// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

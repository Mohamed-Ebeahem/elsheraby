import { createSlice } from "@reduxjs/toolkit";
import i18n from "../i18n";

let languageData =createSlice({
    name:"Count",
    initialState:{
        lang:"en",
    },
    reducers:{
         toggleLanguage : (state) => {
            console.log(state.lang);
            const newLanguage = state.lang === 'en' ? 'ar' : 'en';
            localStorage.setItem('lang',newLanguage)
            i18n.changeLanguage(newLanguage);
            state.lang = newLanguage;
          },
          toggleLanguage2 : (state,x) => {
            console.log(state.lang);
            state.lang = x;
            const newLanguage = localStorage.getItem('lang')
            

            i18n.changeLanguage(newLanguage);
            state.lang = newLanguage;
          }
       
    }
    
})
export let LanguageReducer = languageData.reducer;
export let {toggleLanguage,toggleLanguage2} = languageData.actions;
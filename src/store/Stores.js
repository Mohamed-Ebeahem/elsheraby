import { configureStore } from "@reduxjs/toolkit";
import { LanguageReducer } from './LanguageSlice';

export  let store = configureStore({
    reducer:{
        languageData:LanguageReducer

    }
})
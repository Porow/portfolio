import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { localeReducer as locale } from 'react-localize-redux';
import { initialize, addTranslation} from 'react-localize-redux';
import { translations } from "./locales";

import thunk from 'redux-thunk';
import lang from "./reducers/langReducer";


const store = createStore(
    combineReducers({locale: locale, lang: lang}),
    {},
    compose(applyMiddleware(thunk))
);

store.dispatch(initialize(['en', 'fr'], {defaultLanguage: store.getState().lang.languageDefault}));
store.dispatch(addTranslation(translations));

export default store
import { langConstants } from '../constants/langConstants';
import { setActiveLanguage } from 'react-localize-redux';

export const langActions = {switchLanguage};

function switchLanguage()
{
    return (dispatch, getState) => {
        const currentLanguage = getState().lang.languageDefault;

        switch (currentLanguage)
        {
            case 'fr':
                dispatch({type: langConstants.SWITCH_LANG, lang: 'en'});
                dispatch(setActiveLanguage('en'));
                break;
            case 'en':
                dispatch({type: langConstants.SWITCH_LANG, lang: 'fr'});
                dispatch(setActiveLanguage('fr'));
                break;
            default:
                break;
        }
    };
}
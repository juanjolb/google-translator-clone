import { ActionTypes, type Translator, type TranslatorActions, type Language, type FromLanguage } from '../models/interfaces.d'
import { useReducer } from 'react'

const initialValues: Translator = {
  fromLanguage: 'auto',
  toLanguage: 'english',
  text: '',
  translatedText: '',
  loading: false
}

function reducer (state: Translator, action: TranslatorActions) {
  const { type, payload } = action

  if (type === ActionTypes.SWITCH_LANGUAGES) {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === ActionTypes.FROM_LANGUAGE) {
    return {
      ...state,
      fromLanguage: payload
    }
  }

  if (type === ActionTypes.TO_LANGUAGE) {
    return {
      ...state,
      toLanguage: payload
    }
  }

  if (type === ActionTypes.SET_FROMTEXT) {
    return {
      ...state,
      toLanguage: payload
    }
  }

  if (type === ActionTypes.TRANSLATE_TEXT) {
    return {
      ...state
    }
  }

  return state
}

function useTranslator () {
  const [state, dispatch] = useReducer(reducer, initialValues)

  const switchLanguages = () => {
    dispatch({ type: ActionTypes.SWITCH_LANGUAGES })
  }

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: ActionTypes.FROM_LANGUAGE, payload })
  }

  const setToLanguage = (payload: Language) => {
    dispatch({ type: ActionTypes.TO_LANGUAGE, payload })
  }

  const setFromText = (payload: Language) => {
    dispatch({ type: ActionTypes.SET_FROMTEXT, payload })
  }

  const translateText = (payload: Language) => {
    dispatch({ type: ActionTypes.TRANSLATE_TEXT, payload })
  }

  return {
    state,
    switchLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    translateText
  }
}

export default useTranslator

interface Translator {
  fromLanguage: string
  toLanguage: string
  text: string
  translatedText: string
  loading: boolean
}
export const ActionTypes = {
  SWITCH_LANGUAGES: 'SWITCH_LANGUAGES',
  FROM_LANGUAGE: 'CHANGE_FROMLANGUAGE',
  TO_LANGUAGE: 'CHANGE_TOLANGUAGE',
  SET_FROMTEXT: 'SET_FROMTEXT',
  TRANSLATE_TEXT: 'TRANSLATE_TEXT'
} as const

export type TranslatorActions =
  | Omit<payload, { type: ActionTypes.SWITCH_LANGUAGES } >
  | { type: ActionTypes.FROM_LANGUAGE, payload: string }
  | { type: ActionTypes.TO_LANGUAGE, payload: string }
  | { type: ActionTypes.TRANSLATE_TEXT, payload: string }

const SUPPORTED_LANGUAGES = {
  en: 'English',
  es: 'Spanish',
  de: 'Deutsch'
} as const
const AUTO_LANGUAGE = 'auto'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

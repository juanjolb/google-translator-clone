import Form from 'react-bootstrap/Form'
import { type FromLanguage, type Language, SUPPORTED_LANGUAGES, AUTO_LANGUAGE, type SELECTOR_TYPE } from '../models/interfaces.d'

type Props =
  | { type: typeof SELECTOR_TYPE.FROM, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: typeof SELECTOR_TYPE.TO, value: FromLanguage, onChange: (language: Language) => void }

const LanguageSelector = ({ type, value, onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <Form.Select value={value} onChange={handleChange}>
        {type === 'from' && <option value={AUTO_LANGUAGE}>Detect language</option>}
        {
            Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) =>
                    <option key={key} value={key}>{value}</option>
            )
        }
    </Form.Select>
  )
}

export default LanguageSelector

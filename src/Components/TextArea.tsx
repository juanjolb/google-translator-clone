import { Form } from 'react-bootstrap'
import { SELECTOR_TYPE } from '../models/interfaces.d'

interface Props {
  type: typeof SELECTOR_TYPE.FROM | typeof SELECTOR_TYPE.TO
  value: string
  loading?: boolean
  onChange: (string: string) => void
}

function TextArea ({ type, value, loading, onChange }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  const getPlaceholder = (): string => {
    if (type === SELECTOR_TYPE.FROM) return 'Text to translate'
    return loading === true ? 'Translating text' : 'Text translation'
  }

  return (
      <Form.Control as="textarea" onChange={handleChange} value={value}
      placeholder={getPlaceholder()} rows={5} />
  )
}

export default TextArea

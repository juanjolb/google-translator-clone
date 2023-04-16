import Form from 'react-bootstrap/Form';
import { SUPPORTED_LANGUAGES } from '../models/interfaces.d';

const LanguageSelector = ({fromLanguage, toLanguage}) => {
  return (
    <Form.Select>
        {
            Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => 
                    <option key={key} value={key}>{value}</option>
            )
        }
    </Form.Select>
  );
}

export default LanguageSelector;
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

import './App.css'
import { AUTO_LANGUAGE, SELECTOR_TYPE } from './models/interfaces.d'
import { ArrowsIcon } from './assets/Icons'

import useTranslator from './hooks/useTranslator'
import LanguageSelector from './Components/LanguageSelector'

function App () {
  const {
    fromLanguage,
    toLanguage,
    switchLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    translateText
  } = useTranslator()

  return (
    <Container fluid>
      <h2 className='text-center'>Google Translate</h2>
      <Row>
        <Col>
          <LanguageSelector type={SELECTOR_TYPE.FROM} value={fromLanguage} onChange={setFromLanguage}/>
        </Col>

        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant='link' disabled={ fromLanguage === AUTO_LANGUAGE } onClick={switchLanguages}>
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <LanguageSelector type={SELECTOR_TYPE.TO} value={toLanguage} onChange={setToLanguage}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App

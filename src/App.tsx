import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

import './App.css'
import { AUTO_LANGUAGE, SELECTOR_TYPE } from './models/interfaces.d'
import { ArrowsIcon } from './assets/Icons'

import useTranslator from './hooks/useTranslator'
import LanguageSelector from './Components/LanguageSelector'
import TextArea from './Components/TextArea'

function App () {
  const {
    text,
    translatedText,
    loading,
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
          <TextArea type={SELECTOR_TYPE.FROM} value={text} onChange={setFromText}/>
        </Col>

        <Col className='switch-col'>
          <Button variant='link' disabled={ fromLanguage === AUTO_LANGUAGE } onClick={switchLanguages}>
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <LanguageSelector type={SELECTOR_TYPE.TO} value={toLanguage} onChange={setToLanguage}/>
          <TextArea type={SELECTOR_TYPE.TO} value={translatedText} loading={loading} onChange={translateText}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Collapse } from 'antd'

const Convert = ({ language, text }) => {
  console.log('🚀 ~ file: Convert.js ~ line 6 ~ Convert ~ language', language)
  const [translated, setTranslated] = useState('')
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: process.env.REACT_APP_API_KEY,
          },
        },
      )
      setTranslated(data.data.translations[0].translatedText)
    }

    doTranslation()
  }, [language, text])

  return <div>{translated}</div>
}

export default Convert

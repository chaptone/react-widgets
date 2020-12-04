import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Collapse } from 'antd'

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('')
  const [debouncedText, setDebouncedText] = useState('')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text)
    }, 500)

    return () => {
      clearTimeout(timerId)
    }
  }, [text])

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: process.env.REACT_APP_API_KEY,
          },
        },
      )
      setTranslated(data.data.translations[0].translatedText)
    }

    doTranslation()
  }, [language, debouncedText])

  return <div>{translated}</div>
}

export default Convert

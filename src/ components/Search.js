import React, { useState, useEffect } from 'react'
import { Input, List, Layout, Skeleton } from 'antd';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programing')
  const [debouncedTerm, setDebouncedTerm] = useState(term)
  const [results, setResults] = useState([])

  useEffect(() => {
    const timerId  = setTimeout(() => {
      setDebouncedTerm(term)
    }, 1000)
    return () => {
      clearTimeout(timerId)
    }
  }, [term])

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        }
      })
      setResults(data.query.search)
    }
    search()
  }, [debouncedTerm])

  const replacingString = (string = '') => {
    return string.replace(/<span class="searchmatch">/g, '').replace(/<\/span>/g, '')
  }

  return (
    <Layout>
      <Input.Search placeholder="input search text" onChange={e => setTerm(e.target.value)} onSearch={(value) => setTerm(value)} enterButton />
      {results.length ?
      <List
        itemLayout="horizontal"
        dataSource={results}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href={`https://en.wikipedia.org?curid=${item.pageid}`}>{item.title}</a>}
              description={replacingString(item.snippet)}
            />
          </List.Item>
        )}
      /> : <Skeleton/>}
    </Layout>
  )
}

export default Search
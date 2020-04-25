import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Rows, Item } from '@cda/flex';
import Editor from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '@cda/button';
import Input from '@cda/input';

import { useDispatch } from 'react-redux';
import NewsItem from './newsItem';
import useInput from '../../../../../hooks/useInput';
import { saveNews } from '../beehive.actions';

const News = ({ data, beehiveId }) => {
  const [selectedNews, setSelectedNews] = useState(0);
  const [title, handleTitle, setTitle] = useInput('');
  const [content, setContent] = useState('');
  const [id, setId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data[selectedNews]) {
      setTitle(data[selectedNews].title);
      setContent(data[selectedNews].content);
      setId(data[selectedNews].id);
    }
  }, [selectedNews]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(saveNews(beehiveId, {
      title,
      content,
      id,
    }));
  }, [title, content, id]);

  const create = useCallback(() => {
    setTitle('');
    setContent('');
    setId(null);
  }, []);

  return (
    <Rows>
      <Item>
        {data.map((item, index) => (
          <NewsItem data={item} onClick={() => setSelectedNews(index)} key={item.id} />
        ))}
        <Button onClick={create}>Ajouter</Button>
      </Item>
      <Item>
        <form onSubmit={onSubmit}>
          <Input type="text" value={title} onChange={handleTitle} placeholder="Titre" />
          <Editor value={content} onChange={setContent} />
          <Button type="submit">Enregistrer</Button>
        </form>
      </Item>
    </Rows>
  );
};

News.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  beehiveId: PropTypes.string.isRequired,
};

export default News;

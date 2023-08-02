import React from 'react';
import ReactDOM from 'react-dom';
import { Page } from 'react-onsenui';
import styles from './styles.module.css';

const handleChange = (e) => {
  console.debug(e.target.value);
}

export default class Editor extends React.Component {
  render() {
    return (
      <Page className={styles.editor}>
        <textarea class="textarea textarea--transparent" onChange={handleChange}></textarea>
      </Page>
    );
  }
}
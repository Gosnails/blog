import React from 'react';
import PropTypes from 'prop-types';
import styles from './detail.module.css'
import { BASE_IMG_URL } from '@/utils/config.js'
import LoadingComponent from '@/components/loading/loading.jsx';

const HomeComponent = props => (
    <div className="content">
        {props.loading ? <LoadingComponent /> : (<div className={styles.grid}>
            <div className={styles.cover}>
                <img src={BASE_IMG_URL + props.cover} alt="" />
            </div>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.time}>日期：{props.time}</div>
            <div className={styles.html} dangerouslySetInnerHTML={{ __html: props.content }}></div>
        </div>)}
    </div>
)

HomeComponent.propTypes = {
    loading: PropTypes.bool.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default HomeComponent;
import React from 'react';
import PropTypes from 'prop-types';
import LoadingComponent from '@/components/loading/loading.jsx';
import { BASE_IMG_URL } from '@/utils/config.js'
import classNames from 'classnames';
import styles from './home.module.css';

const getList = props => {
    return props.data.map(item => {
        return (
            <div className="el-col el-col-24 el-col-xs-12 el-col-sm-8 el-col-md-6" key={item._id}>
                <div className={styles.card} onClick={() => props.onHistoryPush(item._id)}>
                    <div className={styles.cover} style={{ background: `url('${BASE_IMG_URL}${item.cover}') rgb(204, 204, 204)` }}></div>
                    <div className={styles.title}>{item.title}</div>
                </div>
            </div>
        )
    })
}

const getCates = props => {
    return props.cates.map(item => {
        const isActive = props.type === item.value
        return (
            <li className={classNames(styles.cateMenuItem, { [styles.active]: isActive })} key={item.label}
                onClick={() => props.onCates(item.value)}>
                {item.label}
            </li>
        )
    })
}

const HomeComponent = props => (
    <div className="content">
        <div className={styles.grid}>
            <div className={styles.cates}>
                <ul className={styles.cateMenu}>
                    {getCates(props)}
                </ul>
            </div>

            <div className="el-row">
                {props.loading ? <LoadingComponent /> : getList(props)}
            </div>
        </div>
    </div>
)

HomeComponent.propTypes = {
    loading: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    cates: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    onHistoryPush: PropTypes.func,
    onCates: PropTypes.func
}

export default HomeComponent;
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const getCates = props => {
    return props.classifyData.map(item => {
        const isActive = props.type === item._id
        return (
            <li className={classNames('cateMenuItem', { ['active']: isActive })} key={item.name}
                onClick={() => props.onCates(item._id)}>
                {item.name}
                <style jsx>{`
                    .cateMenuItem {
                        display: inline-block;
                        padding: 0 10px;
                        font-size: 16px;
                        margin: 10px 10px 10px 0;
                        height: 30px;
                        line-height: 30px;
                        cursor: pointer;
                    }
                    
                    .active {
                        color: #fff;
                        background: #6190e8;
                        font-weight: 400;
                    }
                `}</style>
            </li>
        )
    })
}

const Classify = props => {
    return (<div className="cates">
        <ul className="cateMenu">
            {getCates(props)}
        </ul>
        <style jsx>{`
            .cates {
                overflow: hidden;
                font-size: 16px;
                margin-bottom: 15px;
                height: 50px;
                line-height: 50px;
                overflow: hidden;
                background: #fff;
            }
            
            .cates::-webkit-scrollbar {
                display: none;
            }
            
            .cateMenu {
                display: block;
                white-space: nowrap;
                height: 100%;
                font-size: 0;
                position: relative;
                -webkit-overflow-scrolling: touch;
                overflow-x: auto;
                overflow-y: hidden;
            }
        `}</style>
    </div>)
}

Classify.propTypes = {
    type: PropTypes.string,
    cates: PropTypes.array,
    onCates: PropTypes.func
}

export default Classify;


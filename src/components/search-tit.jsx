import React from 'react';
import PropTypes from 'prop-types';

const SearchTit = props => {
    return (
        <div className="box">
           找到匹配<em>{props.q}</em>的结果<em>{props.num}</em>条:
            <style jsx>{`
                .box {
                    margin-bottom: 20px;
                    font-size: 16px;
                }
                em {
                    font-style: normal;
                    margin: 0 5px;
                    color: #6190e8;
                }
                
            `}</style>
        </div>
    )
}


SearchTit.propTypes = {
    q: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired
}

export default SearchTit;
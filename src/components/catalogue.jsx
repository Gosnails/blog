import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

const Catalogue = (props) => (
  <div className="catalogue">
    <ul className="catalogue-list">
      {props.catalogueList.map((item) => (
        <li className={classNames("catalogue-item", {'highlighted': props.hashValue === item.value})} key={item.value}>
          <span className={classNames("catalogue-item-link", `catalogue-item-link-${item.level}`)}>
            <a href={'#' + item.value} title="">
              <span>{item.value}</span>
            </a>
          </span>
        </li>
      ))}
    </ul>
    <style jsx>{`
      .catalogue {
        position: fixed;
        top: 60px;
        right: 0;
        will-change: top;
        display: none;
        transition: top 0.2s ease 0.2s;
        padding-top: 32px;
        min-width: 200px;
        max-width: 260px;
        font-size: 12px;
      }
      .catalogue-list {
        width: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        font-size: 12px;
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .catalogue-item {
        line-height: 24px;
        font-size: 12px;
        color: #595959;
        border-left: 2px solid #e8e8e8;
      }
      .highlighted {
        border-left: 2px solid #6190e8;
      }
      .catalogue-item-link {
        margin: 0 10px 0 28px;
        width: calc(100% - 28px);
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .catalogue-item-link-1 {
        padding-left: 0;
      }
      .catalogue-item-link-2 {
        padding-left: 1.2em;
      }
      @media screen and (min-width: 1367px) {
        .catalogue {
            display: block;
            right: calc((100% - 1080px)/2);
        }
    }
    `}</style>
  </div>
);

Catalogue.propTypes = {
  catalogueList: PropTypes.array.isRequired,
};

export default Catalogue;

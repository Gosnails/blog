import React from 'react';
import DetailComponent from '@/components/detail/detail.jsx';
import { getArticleDetail } from '@/api/article.js';
import { parseTime } from '@/utils';
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/tomorrow.css';

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            time: '',
            loading: true
        }
    }
    componentDidMount() {
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            },
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
        }
        );
        getArticleDetail(this.props.match.params.id).then(data => {
            this.setState({
                title: data.title,
                content: marked(data.content),
                loading: false,
                time: this._handleFormTime(data.createdAt)
            })
        })
    }
    _handleFormTime(time) {
        let timeStamp = new Date(time).getTime()
        return parseTime(timeStamp);
    }
    render() {
        return (
            <DetailComponent time={this.state.time} title={this.state.title} content={this.state.content} loading={this.state.loading} />
        )
    }
}

export default Detail;
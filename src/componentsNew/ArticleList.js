import React, { Component, PropTypes } from 'react'
import Article from './Article'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array,
        deleteArticle: PropTypes.func
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.articles != this.props.articles
    }

    render() {
        const { articles, deleteArticle } = this.props
        const items = articles.map((article) => <li key = {article.id}><Article {...{ deleteArticle, article }}/></li>)
        return (
            <ul>
                {items}
            </ul>
        )
    }
}

export default ArticleList
const React = require('react');
const axios = require('axios');
const AppStore = require('../stores/app-store');

/**
 * Create SummaryPost class
 */
class SummaryPost extends React.Component {
    /**
     * init class
     */
    constructor() {
        super();
        this.state = {
            posts: [],
            loading: true,
            error: null,
        };
        this.getListPost();
    }

    /**
     * get list post from server
     */
    getListPost() {
        axios.get('http://127.0.0.1:3000/post')
            .then(res => {
                const posts = res.data.map(obj => {
                    return JSON.parse(obj);
                });

                this.setState({
                    posts,
                    loading: false,
                    error: null,
                });
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: err,
                });
            });
    }

    /**
     * @return {html} element loading
     */
    renderLoading() {
        return <div>Loading...</div>;
    }

    /**
     * @return {html} element SummaryPost
     */
    renderPosts() {
        if (this.state.error) {
            return this.renderError();
        }

        const posts = this.state.posts.map(post =>
            <div className='summary-post'>
                <h3>{post.postTitle}</h3>
                <div>{post.content}</div>
            </div>
        );

        return (
            <div>{posts}</div>
        );
    }

    /**
     * @return {html} element error
     */
    renderError() {
        return (
            <div>
                Uh oh: {this.state.error.message}
            </div>
        );
    }

    /**
     * @return {component} SummaryPost
     * render HTML
     */
    render() {

        return (
            <div>
                {this.state.loading ?
                    this.renderLoading()
                    : this.renderPosts()}
            </div>
        );
    }
}

module.exports = SummaryPost;

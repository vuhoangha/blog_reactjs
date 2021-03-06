const React = require('react');
const axios = require('axios');

/**
 * Create DetailPost class
 */
class DetailPost extends React.Component {
    /**
     * init class
     * @param {Number} postId prop truyen vao tu html
     */
    constructor(postId) {
        super(postId);
        this.state = {
            post: null,
            sum: 0,
            loading: true,
            error: null,
        };
        this.getDetailPost(postId);
    }

    /**
     * load detail post
     * @param {Number} postId id cua POST
     */
    getDetailPost(postId) {
        axios.get(`http://127.0.0.1:5000/post?key=${JSON.stringify(postId)}`)
            .then(res => {
                let post1 = null;

                if (Array.isArray(res.data) && res.data.length > 0) {
                    post1 = JSON.parse(res.data[0]);
                }
                this.setState({
                    post: post1,
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
     * plus state num one point
     */
    addSum() {
        this.setState({ sum: ++this.state.sum });
    }

    /**
         * @return {html} element loading
         */
    renderLoading() {
        return <div>Loading...</div>;
    }

    /**
     * render error
     * @return {html} element loading
     */
    renderError() {
        return (
            <div>
                Uh oh: {this.state.error.message}
            </div>
        );
    }

    /**
     * render detail post
     * @return {component} SummaryPost
     */
    renderDetailPost() {
        if (this.state.error !== null) {
            return this.renderError();
        }
        return (
            <div>
                <h3>{this.state.post.postTitle}</h3>
                <div>{this.state.post.content}</div>
                <button onClick={() => { this.addSum(); }}>Add</button>
                <div>{this.state.sum}</div>
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
                    : this.renderDetailPost()}
            </div>
        );
    }
}

module.exports = DetailPost;

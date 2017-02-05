const React = require('react');

/**
 * Create DetailPost class
 */
class DetailPost extends React.Component {
    /**
     * init class
     * @param {Object} props prop truyen vao tu html
     */
    constructor(props) {
        super(props);
        this.state = {
            post: props.post,
            sum: 0,
        };
    }

    /**
     * plus state num one point
     */
    addSum() {
        this.setState({
            sum: ++this.state.sum,
        });
    }

    /**
     * @return {component} SummaryPost
     * render HTML
     */
    render() {
        return (
            <div>
                <div>
                    <h3>{this.state.post.postTitle}</h3>
                    <div>{this.state.post.content}</div>
                    <button onClick={() => { this.addSum(); } }>Add</button>
                    <div>{this.state.sum}</div>
                </div>
            </div>
        );
    }
}

module.exports = DetailPost;

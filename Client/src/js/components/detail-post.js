const React = require('react');

/**
 * Create DetailPost class
 */
class DetailPost extends React.Component {
    /**
     * init class
     */
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            post: props.post,
        };
    }

    /**
     * @return {component} SummaryPost
     * render HTML
     */
    render() {
        return (
            <div>
                <div className='summary-post'>
                    <h3>{this.state.post.postTitle}</h3>
                    <div>{this.state.post.summary}</div>
                </div>
            </div>
        );
    }
}

module.exports = DetailPost;

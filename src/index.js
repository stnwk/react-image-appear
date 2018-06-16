//import React from 'React';

const defaultLoader = 'data:image/gif;base64,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';

class ReactImageAppear extends React.Component {
    constructor(props) {
        super(props);

        this.state = { imgComponent: null };
        this.imageLoaded = this.imageLoaded.bind(this);
        this.getImageDimensions = this.getImageDimensions.bind(this);
        this.parseComputedDimensions = this.parseComputedDimensions.bind(this);
        this.createContainer = this.createContainer.bind(this);
    }

    componentDidMount() {
        const { src } = this.props;

        let imgElement;
        this.setState({
            imgComponent: React.createElement('img', {
                src, onLoad: this.imageLoaded, ref: ref => {
                    imgElement = ref;
                }
            })
        }, () => {
            this.getImageDimensions(imgElement);
        });
    }

    imageLoaded() {
        console.log('loaded');
        this.setState({
            imgComponent: React.createElement('img', {
                src: this.props.src, style: {
                    animation: 'fadeInUp 2s ease-in-out'
                }
            })
        });
    }

    getImageDimensions(imgElement) {
        const that = this, dimensionsInterval = setInterval(() => {
            const { width, height } = this.parseComputedDimensions(imgElement);

            if (width && height) {
                clearInterval(dimensionsInterval);
                that.createContainer(width, height);
            }
        }, 10);
    }

    parseComputedDimensions(el) {
        return {
            width: Number(window.getComputedStyle(el).width.match(/\d+/)),
            height: Number(window.getComputedStyle(el).height.match(/\d+/))
        };
    }

    createContainer(width, height) {
        const { imgComponent } = this.state;

        const container = React.createElement('div', {
            style: {
                width,
                height,
                display: 'inline-block',
                backgroundColor: '#f0f0f0',
                backgroundImage: `url(${defaultLoader})`,
                backgroundPosition: 'center center',
                backgroundSize: '40px 40px',
                backgroundRepeat: 'no-repeat'
            }
        }, React.cloneElement(imgComponent, {
            style: {
                display: 'none'
            }
        }));

        this.setState({ imgComponent: container });
    }

    render() {
        const { imgComponent } = this.state;

        return imgComponent;
    }
}

//export default ReactImageAppear;
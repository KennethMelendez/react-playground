

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayToggle: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState((prevState) => {
            return {
                displayToggle : !prevState.displayToggle
            } 
        });
        console.log(this.state.displayToggle);
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>

                <button onClick={this.toggle}>
                    {
                        this.state.displayToggle ? 'Hide details' : 'show details'
                    }
                </button>

                {
                    this.state.displayToggle && 
                    (<p>This is some details weee</p>)
                }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle /> , document.getElementById('app'));



/*

let toggle = false;

const msg = () => {
    toggle = !toggle;
    console.log(toggle);
    render();
}


const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={msg}> {toggle ? 'Hide details': 'Show Details' } </button>
            {toggle && (<p>Here are some details!</p>)}
        </div>    
    );
    const app = document.getElementById('app');

    ReactDOM.render(template, app);
}

render();*/
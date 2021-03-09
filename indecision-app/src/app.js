// stateless functional component

class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: []
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount() {

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate!');
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState)=> ({
            options: prevState.options.filter((option) =>  optionToRemove !== option)
        }))
    }

    handlePick() {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
    }


    handleAddOption(option) {

        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState) => ({options : prevState.options.concat(option)}));
    }

    render() {

        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of another computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption} 
                    handleDeleteOptions={this.handleDeleteOptions}
                   
                />
                <AddOption 
                    options={this.state.options}
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
}

Header.defaultProps = {
    title: 'some defualt'
}


const Action = (props) => {
    return (
            <div>
                <button disabled={!props.hasOptions} onClick={props.handlePick}> What should I do? </button>
            </div>
        );
}

const Options = (props) => {
    return (
            <div>
                    <button onClick={props.handleDeleteOptions}>Remove All</button>


                    {props.options.length === 0 && <p>Please add an option to get started</p>}

                    {
                        props.options.map((item) => (
                            <Option key={item} 
                            handleDeleteOption={props.handleDeleteOption} 
                            optionText={item} />))

                    }


            </div>
    );
}


class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error}));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
            { this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const Option = (props) => {
        return (
            <div>
                {props.optionText} 
                <button onClick={(e)=> {
                    props.handleDeleteOption(props.optionText);
                }}
                >
                Remove</button>
            </div>
        );
}


/*
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {}</p>
        </div>
    )
}*/

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

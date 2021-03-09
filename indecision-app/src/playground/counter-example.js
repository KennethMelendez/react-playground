

class Counter extends React.Component {


    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = { 
            count: [],
            name: 'Kenneth Melendez'
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getitem('count');
            let count = JSON.parse(json);
            if (count) {
                setState(() => ({ count }));
            }
        } catch(e) {

        }
    }

    componentDidUpdate(prevProp, prevState) {
        if(prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count);
            locatStorage.setItem('count', json);
        }
    }

    handleAddOne(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            };
        });
    }

    handleMinusOne(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            };
        })
    }

    handleReset(e) {
        e.preventDefault();
        this.setState((prevState)=> {
            return {
                count: 0
            };
        });
    }

    render () {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
                </div>
        );
    }
}




ReactDOM.render(<Counter />, document.getElementById('app'));



/*
let count = 0;

const addOne = () => {
    console.log('Add one triggered.')
    console.log(count);
    count +=1;
    RenderCounterApp();
};

const minusOne = () => {
    console.log('Minus one triggered.');
    console.log(count);
    count-=1;
    RenderCounterApp();
};

const refresh = () => {
    console.log('refresh triggered');
    console.log(count);
    count = 0;
    RenderCounterApp();
}


const RenderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} className="button">+1</button>
            <button onClick={minusOne} className="button">-1</button>
            <button onClick={refresh} className="button">refresh</button>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);
}

RenderCounterApp();*/
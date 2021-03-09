console.log("app.js loaded.");

//npx babel src/app.js --out-file=public/scripts/app.js --presets="@babel/preset-env,@babel/preset-react"

const app = {
    title : 'This is my first JSX application',
    subtitle : 'Welcome to the appliucation',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements['option'].value;
    console.log(option);

    if (option) {
        app['options'].push(option);
        console.log(app['options']);
        e.target.elements.option.value = '';
    }

    renderTemplate();
};

const removeItems = () => {
    app['options'] = [];
    console.log(app['options']);
    renderTemplate();
};


//reference not evoke the function onFormSubmit


// create remove all button
// wipe out empty array

const appRoot = document.getElementById('app');

const numbers = [55,101,1000];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    console.log(randomNum);
    alert(option);
}

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app['title'] }</h1>
            {app['subtitle'] && <p>{app['subtitle']}</p>}
            <button onClick={removeItems}>Remove Items</button>

            <form onSubmit={onFormSubmit}> 
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>

            <p>{app['options'].length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should i do?</button>
            <ol>
                {
                    app['options'].map((option, index)=> <li key={index}>option: {option} | index: {index}</li>) 
                }
            </ol>
    

        </div>
    );    
    ReactDOM.render(template,appRoot);   
};

renderTemplate();

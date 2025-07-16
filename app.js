// const heading = React.createElement('h1',{id:'heading1'},"Hey Arjun Ready for the show.");
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

const heading = React.createElement('div',{id:'grandParent'},
    [React.createElement('h1',{},'Name:Arjun'),
        React.createElement('p',{},'Occupation: Software Engineer'),
        React.createElement('p',{},'Age: 25'),
    ]
)
const root = ReactDOM.createRoot(document.getElementById('arjun'))
root.render(heading)
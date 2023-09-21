
const heading = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child 1"},[
        React.createElement("h1",{},"Hey I am h1 tag"),
        React.createElement("h2",{},"Hey I am h2 tag")
    ]),
    React.createElement("div",{id:"child 2"},[
        React.createElement("h1",{},"Hey I am h1 tag"),
        React.createElement("h2",{},"Hey I am h2 tag")
    ])
]
)

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);
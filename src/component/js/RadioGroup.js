import React from "react";

function renderButtons(labels) {
    console.log(labels);
    if (labels.length > 0) {      
        return labels.map((label, index) => (
            <input type="radio" />/{label}
        ));
    }
    else return [];
}

export default class RadioGroup extends React.Component {
    
    render () {
        const buttons = renderButtons(this.props.labels);

        return (
            <div className="radiogroup-container">
                {buttons}
            </div>
        );
    }
}
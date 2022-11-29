const RadioButton = ({defaultChecked, value, name, label}) => {

        return (
            <div>
                <input type="radio" defaultChecked={defaultChecked} value={value} name={name}/> {label}
            </div>
        );
}

export default RadioButton;
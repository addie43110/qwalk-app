import React from "react";
import { Button, Form, Radio, Input, Checkbox } from 'antd';
import classes from "../css/Options.module.css";

const LINE = "line";
const GRID = "grid";
const CUBE = "cube";

const Options = (props) => {
    const {setErrorMessage} = props;
    

    const isAPowerOfTwo = (value) => {
        return ((value & (value-1)) === 0);
    }

    const onFinish = (values) => {
        const {type, magnitude, cumulativeProbability, steps}  = values;
        console.log(values);
        if (magnitude === undefined || steps === null) {
            setErrorMessage("Empty field(s)");
        } else if (!Number.isInteger(magnitude) || !Number.isInteger(steps) || magnitude < 1 || steps < 0 || steps > 20) {
            setErrorMessage("Invalid parameter(s) entered. Magnitude must be an integer greater than or equal to 1 \
                and steps must be a positive integer no larger than 20.");
        } else if (type === LINE && !isAPowerOfTwo(magnitude)) {
            setErrorMessage("Invalid magnitude entered. Magnitude must be a power of 2.");
        } else if (type === GRID && !isAPowerOfTwo(Math.pow(magnitude, 2))) {
            setErrorMessage("Invalid magnitude entered. Squared magnitude must be a power of 2.");
        } else if (type === CUBE && !isAPowerOfTwo(Math.pow(magnitude, 3))) {
            setErrorMessage("Invalid magnitude entered. Cubed magnitude must be a power of 2.");
        } else {
            console.log("Send post request!");
        }
    }

    return (
        <div className={classes["options-container"]}>
            <h1>Options</h1>
            <Form onFinish={onFinish} initialValues={{ type:LINE }}>
                <Form.Item name="type" label="Type">
                    <Radio.Group>
                        <Radio value={LINE}> Line </Radio>
                        <Radio value={GRID}> Grid </Radio>
                        <Radio value={CUBE}> Cube </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="magnitude" label="Magnitude">
                    <Input />
                </Form.Item>
                <Form.Item name="cumulativeProbability" label="Cumulative probability?" valuePropName="checked">
                    <Checkbox>Y/N</Checkbox>
                </Form.Item>
                <Form.Item name="numberOfSteps" label="Number of steps">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button className={classes["submit-button"]} type="primary" htmlType="submit">Load Quantum Walk</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Options;
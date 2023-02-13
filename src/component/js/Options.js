import React, {useEffect, useState, useForm} from "react";
import { Button, Space, Form, Radio, Input, Checkbox } from 'antd';
import classes from "../css/Options.module.css";

const LINE = "line";
const GRID = "grid";
const CUBE = "cube";

const Options = () => {
    const [type, setType] = useState(GRID);
    const [numStates, setNumStates] = useState(null);
    const [cumulativeProbability, setCumulativeProbability] = useState(false);
    const [steps, setSteps] = useState(null);
    const [form] = Form.useForm();

    useEffect(() => {
        try {
            if (numStates == null) {
                throw new Error("Please enter a number of states. The number of states will be the number of positions \
                    the walker can visit.");
            }

            if (steps === null) {
                throw new Error("Please enter the number of steps. This number refers to how many steps the walker \
                    will take.");
            }

            if (!Number.isInteger(numStates) || !Number.isInteger(steps) || numStates < 1 || steps < 0 || steps > 20 || numStates>64) {
                throw new Error("Invalid parameter(s) entered. Number of states must be a positive integer no larger than 64 \
                    and steps must be a positive integer no larger than 20.");
            }

            if (type === LINE && !isAPowerOfTwo(numStates)) {
                throw new Error("Invalid number entered. If line is selected, number of states must be a power of 2.");
            }

            let numStatesSqrt = Math.round(Math.sqrt(numStates));
            if (type === GRID && !isAPowerOfTwo(numStatesSqrt)) {
                throw new Error("Invalid number entered. If grid is selected, the square root of the number of states \
                    must be a power of 2.");
            }

            let numStatesCbrt = Math.round(Math.pow(numStates, 1./3));
            if (type === CUBE && !isAPowerOfTwo(numStatesCbrt)) {
                throw new Error("Invalid number entered. If cube is selected, the cube root of the number of states \
                    must be a power of 2.");
            }

            setNumStates(numStates);
            setSteps(steps);
        } catch (e) {
            console.error(`${e.message}`)
        }
    }, [type, numStates, steps]);

    const isAPowerOfTwo = (value) => {
        return ((value & (value-1)) === 0);
    }

    const onFinish = (values) => {
        console.log(values);
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
                <Form.Item name="numStates" label="Number of States">
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
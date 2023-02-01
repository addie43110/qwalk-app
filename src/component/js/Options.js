import React, {useEffect, useState, useForm} from "react";
import { Button, Space, Form, Radio, Input, Checkbox } from 'antd';
import classes from "../css/Options.module.css";

const LINE = "line";
const GRID = "grid";
const CUBE = "cube";

const Options = () => {
    const [type, setType] = useState(GRID);
    const [magnitude, setMagnitude] = useState(null);
    const [cumulativeProbability, setCumulativeProbability] = useState(false);
    const [steps, setSteps] = useState(null);
    const [form] = Form.useForm();

    useEffect(() => {
        try {
            if (magnitude === null || steps === null) {
                return;
            }

            if (!Number.isInteger(magnitude) || !Number.isInteger(steps) || magnitude < 1 || steps < 0 || steps > 20) {
                throw new Error("Invalid parameter(s) entered. Magnitude must be an integer greater than or equal to 1 \
                    and steps must be a positive integer no larger than 20.");
            }

            if (type === LINE && !isAPowerOfTwo(magnitude)) {
                throw new Error("Invalid magnitude entered. Magnitude must be a power of 2.");
            }

            let magnitudeSquared = Math.pow(magnitude, 2);
            if (type === GRID && !isAPowerOfTwo(magnitudeSquared)) {
                throw new Error("Invalid magnitude entered. Squared magnitude must be a power of 2.");
            }

            let magnitudeCubed = Math.pow(magnitude, 3);
            if (type === CUBE && !isAPowerOfTwo(magnitudeCubed)) {
                throw new Error("Invalid magnitude entered. Cubed magnitude must be a power of 2.");
            }

            setMagnitude(magnitude);
            setSteps(steps);
        } catch (e) {
            console.error(`${e.message}`)
        }
    }, [type, magnitude, steps]);

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
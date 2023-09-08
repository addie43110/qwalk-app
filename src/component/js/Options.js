import React, {useEffect, useState, useForm} from "react";
import { Button, Space, Form, Radio, Input, Checkbox, InputNumber} from 'antd';
import classes from "../css/Options.module.css";
import styles from "../css/Options.module.css"

const LINE = 1;
const GRID = 2;
const CUBE = 3;

const Options = (props) => {
    const {graphHandler} = props;

    const [type, setType] = useState(LINE);

    const isInteger = (str) => {
        var floorInt = Math.floor(Number(str.trim()));
        return floorInt !== Infinity && String(floorInt) === str;
    }

    const isAPowerOfTwo = (value) => {
        return (Math.log(value)/Math.log(2)) % 1 === 0;
    }

    const onFinish = (fieldsValues) => {

        const values = {
            'dimensions': Number(fieldsValues['dimensions']),
            'num_states': Number(fieldsValues['num_states']),
            'iterations': Number(fieldsValues['iterations'])
        }
        graphHandler(values);
    }

    const validateNumStates = async (rule, value) => {
        if (!isInteger(value)) {
            throw new Error("Must be an integer");
        }

        if (value < 1) {
            throw new Error("Must have at least one state");
        }

        if (value > 64) {
            throw new Error("Number of states limited to 64");
        }

        if (type === LINE && !isAPowerOfTwo(value)) {
            throw new Error("If line is selected, number of states must be a power of 2");
        }

        let numStatesSqrt = Math.sqrt(value);
        if (type === GRID && !isAPowerOfTwo(numStatesSqrt)) {
            throw new Error("If grid is selected, the square root of the number of states \
                must be a power of 2");
        }

        let numStatesCbrt = Math.pow(value, 1./3);
        if (type === CUBE && !isAPowerOfTwo(numStatesCbrt)) {
            throw new Error("If cube is selected, the cube root of the number of states \
                must be a power of 2");
        }
    }

    const validateNumSteps = async (rule, value) => {
        if (!isInteger(value)) {
            throw new Error("Must be an integer");
        }

        if (value < 0) {
            throw new Error("Must be at least 0");
        }

        if (value > 50) {
            throw new Error("Number of steps limited to 50");
        }
    }

    return (
        <div className={classes["options-container"]}>
            <h1>Options</h1>
            <Form className={classes.form} onFinish={onFinish} initialValues={{ dimensions: LINE}}>
                <Form.Item className={classes.formItem} name="dimensions" label="Type" >
                    <Radio.Group name="type" initialValues={LINE} onChange={ v => setType(v.target.value) }>
                        <Radio name="type" value={LINE}> Line </Radio>
                        <Radio name="type" value={GRID}> Grid </Radio>
                        <Radio name="type" value={CUBE}> Cube </Radio>
                    </Radio.Group>
                </Form.Item>
                <div className={classes.textInput}>
                    <Form.Item className={classes.formItem} id={styles.numStates} name="num_states" label="Number of States"
                            rules={[
                                { required: true, message: "Please enter the number of states"},
                                { validator: validateNumStates }]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item className={classes.formItem} id={styles.numSteps} name="iterations" label="Number of steps" 
                            rules={[
                                { required: true, message: 'Please enter the number of steps.' },
                                { validator: validateNumSteps }]}>
                        <Input />
                    </Form.Item>
                </div>
                <Form.Item className={classes.formItem}>
                    <Button className={classes["submit-button"]} type="primary" htmlType="submit">Load Quantum Walk</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Options;
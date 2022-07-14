import { Divider, Button, Form, Input, Col } from 'antd';
import { useState } from "react";

function AddFoodForm(props) {
    const [form] = Form.useForm();
    const [name,setName] = useState("")
    const [image,setImage] = useState("")
    const [calories,setCalories] = useState(0)
    const [servings,setServings] = useState(0)
    const [showForm, setShowForm] = useState(true)

    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handleImage = (e) =>{
        setImage(e.target.value)
    }

    const handleCalories = (e) =>{
        setCalories(e.target.value)
    }

    const handleServings = (e) =>{
        setServings(e.target.value)
    }

    const handleSubmit = (e) => {
        const newFood = {
            name,
            image,
            calories,
            servings
        }  
        props.addFood(newFood)
        setName("")
        setImage("")
        setCalories(0)
        setServings(0)

    }

    const toggleForm = () => {
        showForm ? (setShowForm(false)) : (setShowForm(true))
    }

    return(
        <>
            <Divider plain><h3>Add a new food</h3></Divider>            
            <Col span={8} offset={8}>
                {showForm ? (<>
                    <Form
                form={form}
                layout="vertical"       
                onFinish={handleSubmit}
                >
                <Form.Item label="Name" required tooltip="This is a required field">
                    <Input value={name} type="text" onChange={handleName}  placeholder="Name your favorite food" />
                </Form.Item>
                <Form.Item label="Image" required tooltip="This is a required field">
                    <Input value={image} type="text" onChange={handleImage}  placeholder="Image url" />
                </Form.Item>
                <Form.Item label="Calories" required tooltip="This is a required field">
                    <Input value={calories} type="number" onChange={handleCalories} />
                </Form.Item>
                <Form.Item label="Servings" required tooltip="This is a required field">
                    <Input value={servings} type="number" onChange={handleServings} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">Submit</Button>
                </Form.Item>
                </Form>
                <Button onClick={toggleForm} type="primary">Hide form</Button>
                </>):(<Button onClick={toggleForm} type="primary">Show form</Button>)}
            </Col>
        </>
    )
}

export default AddFoodForm
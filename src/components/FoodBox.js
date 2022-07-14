import { Card, Col, Button } from 'antd';

function FoodBox(props) {
    const  {food, deleteFood} = props
    
    return (
        <Col xs={12} sm={12} md={8} lg={6} xl={6}>
            <Card 
            title={food.name} 
            style={{ width: 230, height: 300, margin: 10 }}>
            <img src={food.image} height={60} alt={food.name}/>
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
                <b>Total Calories: {food.calories*food.servings}</b>
            </p>
            <Button type="primary" danger onClick={()=>{deleteFood(food.name)}}>Delete</Button>
            </Card>
        </Col>
    )
}
export default FoodBox

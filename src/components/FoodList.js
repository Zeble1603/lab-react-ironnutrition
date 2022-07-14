import React from 'react';
import foodData from '../foods.json';
import { useState } from "react";
import { Divider, Row } from 'antd';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search';

function FoodList() {
    const [foods,setFood] = useState(foodData)
    const [cloneFoods,setCloneFood] = useState(foodData)
    const [foodEmpty,setFoodEmpty] = useState(false)

    const addNewFood = (newFood) => {
        const updatedFood = [...foods, newFood];
        setFood(updatedFood);
        setCloneFood(updatedFood)
        };

    const searchFoodByName = (word) => {
        const updatedFood = cloneFoods.filter((cloneFood)=>{
            if(word===""){
                return cloneFood
            }else{
                return cloneFood.name.toLowerCase().includes(word.toLowerCase())
            }
        }   
        );
        setFood(updatedFood);
        };
    
    const deleteFood = (name) =>{
        const newArray = [...foods].filter(food => food.name !== name)
        setFood(newArray)
        setCloneFood(newArray)
        if (foods.length === 1 || cloneFoods.length === 1){
            setFoodEmpty(true)
        }
    }

    return(
        <div id="foodlist">
            <AddFoodForm addFood={addNewFood} />
            <Search searchFood={searchFoodByName}/>
            <Divider plain><h3>Food List</h3></Divider>
            {foodEmpty ? (<Row gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
                }}
            >OOPS ! There is no more food in the list</Row>) : (
                <Row gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
                }}
            >
                {foods.map((food)=>{
                    return(
                        <FoodBox 
                        food={food}
                        deleteFood = {deleteFood}    
                        />
                    )
                })}
            </Row>
            )}    
        </div>
    )
}

export default FoodList
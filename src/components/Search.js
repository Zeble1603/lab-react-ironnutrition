import { Divider, Input, Col } from 'antd';
import { useState } from "react";
import React from 'react';

function Search(props) {
    const [searchName,setsearchName] = useState("")
    
    const handleName = (e) =>{
        props.searchFood(e.target.value)
        setsearchName(e.target.value)
    }

    return(
        <>
            <Divider plain><h3>Search for your favorite food</h3></Divider>
            <Col span={8} offset={8}>
                <Input value={searchName} type="text" onChange={handleName}  placeholder="Searh for your favorite food" />        
            </Col>
        </>
    )
}
export default Search


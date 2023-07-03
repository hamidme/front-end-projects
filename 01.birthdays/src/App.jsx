import React, { useState } from "react";
import data from "./data";
import { styled } from "styled-components";

const Container = styled.section`
  /* height: 100vh; */
  background-color: #fae8ff;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.section`
  height: 80%;
  width: 33%;
  margin: 20px auto;
  padding: 20px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(209, 209, 209, 0.75);
`;

const Content = styled.section`
  display: flex;
  margin: 10px 0;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

const Button = styled.button`
  width: 100%;
  background-color: #d946ef;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
  cursor: pointer;
`;

const Age = styled.p`
  color: #959595;
`;
const Small = styled.small`
  cursor: pointer;
  color: blue;
`;

export default function App() {
  const [lists, setLists] = useState(data);

  const removeUser = (id) => {
    let newList = lists.filter((user) => user.id !== id);
    setLists(newList);
  };

  const handleClick = () => {
    setLists([]);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <h1 style={{ textAlign: "center" }}>5 Birthdays Today</h1>
          {lists.map((list) => {
            const { id, name, age, image } = list;
            return (
              <Content>
                <Image src={image} alt="" />
                <div>
                  <h3>{name}</h3>
                  <Age>{age} years</Age>

                  <Small onClick={() => removeUser(id)}>remove</Small>
                </div>
              </Content>
            );
          })}

          <Button onClick={handleClick}>Clear All</Button>
        </Wrapper>
      </Container>
    </>
  );
}

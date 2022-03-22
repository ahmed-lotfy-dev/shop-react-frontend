import { Facebook, Instagram, Phone, Pinterest, Room, Twitter, MailOutline } from '@mui/icons-material'
import styled from 'styled-components'
import React from 'react'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
    ${mobile({ flexDirection: "column" })}

`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 50%;
  background-color: #${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}

`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px ;
`

const Right = styled.div`
  flex: 1;
  ${mobile({ backgroundColor: "#fff8f8" })}

`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 55%;
`

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AL-Shop</Logo>
        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum nulla et voluptate, aliquam laborum ipsa facilis. Aliquam unde pariatur consequuntur eum ducimus nisi, veritatis, distinctio impedit itaque inventore minima. Odit?</Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55acee'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{ marginRight: "10px" }} />ALMahalla ALKubra,Gharbia,Egypt</ContactItem>
        <ContactItem><Phone style={{ marginRight: "10px" }} />+20101603747</ContactItem>
        <ContactItem><MailOutline style={{ marginRight: "10px" }} />contact@alotfy.me</ContactItem>
        <Payment style={{ marginRight: "10px" }} src='../imgs/Payment.png' />
      </Right>
    </Container >
  )
}
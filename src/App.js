import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './sidebar';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
export default function App() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
    <div>Bookkeeper</div>
    <nav 
      style={{ 
        borderBottom: "solid 1px", 
        paddingBottom: "1rem",
        }}>
      <Link to="/invoices">Invoices</Link> | {" "}
      <Link to="/expenses">Expenses</Link>
      <Link to="/finder">Finder</Link>
    </nav>
    {/* <Sidebar /> */}
    <br/>
    <Outlet />
    </Box>
    </div>
  )
}

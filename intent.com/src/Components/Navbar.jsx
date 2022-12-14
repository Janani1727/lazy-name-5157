import { React } from 'react';
import Images from "../Images/Add.png"
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Text
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import DrawerExample from "../Components/Sidebar"
import { FaShoppingCart } from "react-icons/fa"
import { Link as RouterLink } from "react-router-dom"




export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("white")} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex>
            {/* <HamburgerIcon color="black" mt={5} ml={5}  boxSize={10} /> */}
            <DrawerExample />
            <Image src={Images} h={20} ml={5} width={"100px"} />
          </Flex>

          <RouterLink to="/cart">
            <Text marginLeft={"1050px"} >
              <FaShoppingCart />
            </Text>

          </RouterLink>


          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'#df1e2e'}
                href={'#'}
                _hover={{
                  bg: 'red.600',
                }}>
                Sign Up
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}



import {
  Box,
  Button,
  Container,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './context/GlobalWrapper';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import Row from './components/Row';
import DrawerExample from './components/DrawerExample';

function App() {
  const { FetchUsers, Search, users, onOpen, isOpen, onClose } =
    useContext(GlobalContext);
  const [query, setQuery] = useState('');
  useEffect(() => {
    FetchUsers();
  }, []);
  const SearchHandler = () => {
    Search(query);
  };
  const onchangeHandler = (e) => {
    setQuery(e.target.value);
  };
  function Reports() {
    return (
      <div className="reports">
        <h1>Reports</h1>
      </div>
    );
  }
  return (
    
    <div className="App">
      
      <Container maxW={'full'} p="4" fontSize={'18px'}>
        <Box rounded="lg" boxShadow="base" p="4">
          <Box mt="2" gap={'2'} mb="4" display={'flex'}>
            <FormControl>
              <Input type="text" onChange={onchangeHandler} />
            </FormControl>
            <Button
              leftIcon={<AiOutlineSearch />}
              colorScheme="teal"
              variant="outline"
              maxW="300px"
              minW="150px"
              onClick={() => SearchHandler()}
            >
              Search
            </Button>
          </Box>
        </Box>
        <Box mt="5" rounded={'lg'} boxShadow="base">
          <Box p="4" display={'flex'} justifyContent="space-between">
            <Text fontSize="xl" fontWeight="bold">
              List Users
            </Text>
            <Button
              colorScheme="teal"
              variant="outline"
              maxW={'300px'}
              minW="150px"
              leftIcon={<AiOutlinePlus fontSize={'20px'} />}
              onClick={onOpen}
            >
              Add User
            </Button>
          </Box>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Avatar</Th>
                  <Th>SocieteName</Th>
                  <Th>AgentName</Th>
                  <Th>SocieteLocalion</Th>
                  <Th>LegalForm</Th>
                  <Th>Activity</Th>
                  <Th>Products</Th>
                  <Th>WorkshopLocation</Th>
                  <Th>StorageLocation</Th>
                  <Th>PhoneNumber</Th>
                  <Th>Fax</Th>
                  <Th>NumberOfAdmins</Th>
                  <Th>NumberOfWorkers</Th>
                  <Th>ExportType</Th>
                  <Th>LocalType</Th>
                  <Th>TaxID</Th>
                  <Th>Fullname</Th>
                  <Th>DiwaniID</Th>
                  <Th>CommercialID</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users?.map(({ _id, fullname, email, age, LegalForm,WorkshopLocation }) => {
                  return (
                    <Row
                      id={_id}
                      fullname={fullname}
                      email={email}
                      age={age}
                      LegalForm={LegalForm}
                      WorkshopLocation={WorkshopLocation}

                    />
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <DrawerExample />
      </Container>
    </div>
  );
}

export default App;

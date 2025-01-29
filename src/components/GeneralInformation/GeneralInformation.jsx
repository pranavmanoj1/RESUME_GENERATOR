import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'

const GeneralInformation = ({ setGeneralInfo }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    middleName: '',
    lastName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setGeneralInfo({
      ...formData,
      [name]: value
    });
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" padding="4" boxShadow="lg" maxWidth="400px" marginLeft={10}>
      <Flex direction="column" justify="center">
        <Box>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' name='email' value={formData.email} onChange={handleChange} />
            <Text fontSize="sm" color="gray.500">We'll never share your email.</Text>
          </FormControl>
        </Box>  
        <Box marginBottom="4">
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type='text' name='firstName' value={formData.firstName} onChange={handleChange} />
          </FormControl>
        </Box>
        <Box marginBottom="4">
          <FormControl>
            <FormLabel>Middle Name</FormLabel>
            <Input type='text' name='middleName' value={formData.middleName} onChange={handleChange} />
          </FormControl>
        </Box>
        <Box marginBottom="4">
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type='text' name='lastName' value={formData.lastName} onChange={handleChange} />
          </FormControl>
        </Box>
      </Flex>
    </Box>
  )
}

export default GeneralInformation
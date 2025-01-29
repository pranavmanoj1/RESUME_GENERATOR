import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex
} from '@chakra-ui/react'
import { useState } from 'react'

const Education = ({ setEducation }) => {
  const [formData, setFormData] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setEducation({
      ...formData,
      [name]: value
    });
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" padding="4" boxShadow="lg" maxWidth="400px" minWidth="400px" marginLeft={10}>
      <Flex direction="column" justify="center">
        <Box marginBottom="4">
          <FormControl>
            <FormLabel>School Name</FormLabel>
            <Input type='text' name='schoolName' value={formData.schoolName} onChange={handleChange} />
          </FormControl>
        </Box>  
        <Box marginBottom="4">
          <FormControl>
            <FormLabel>Title of Study</FormLabel>
            <Input type='text' name='titleOfStudy' value={formData.titleOfStudy} onChange={handleChange} />
          </FormControl>
        </Box>
        <Box marginBottom="4">
          <FormControl>
            <FormLabel>Date of Study</FormLabel>
            <Input type='date' name='dateOfStudy' value={formData.dateOfStudy} onChange={handleChange} />
          </FormControl>
        </Box>
      </Flex>
    </Box>
  )
}

export default Education
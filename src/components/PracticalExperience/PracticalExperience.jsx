import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Button
} from '@chakra-ui/react';

const PracticalExperience = ({ experience, index, handleChange, handleRemove }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" padding="4" boxShadow="lg" maxWidth="400px" marginLeft={10}>
      <Flex direction="column" justify="center">
        <Box marginBottom="4">
          <FormControl>
            <FormLabel>Company Name</FormLabel>
            <Input
              type='text'
              name="companyName"
              value={experience.companyName}
              onChange={(e) => handleChange(index, 'companyName', e.target.value)}
            />
          </FormControl>
        </Box>
        <Box marginBottom="4">
          <FormControl>
            <FormLabel>Position Title</FormLabel>
            <Input
              type='text'
              name="positionTitle"
              value={experience.positionTitle}
              onChange={(e) => handleChange(index, 'positionTitle', e.target.value)}
            />
          </FormControl>
        </Box>
        <Box marginBottom="4">
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input
              type='text'
              name="description"
              value={experience.description}
              onChange={(e) => handleChange(index, 'description', e.target.value)}
            />
          </FormControl>
        </Box>
        <Button colorScheme="red" onClick={() => handleRemove(index)}>Remove</Button>
      </Flex>
    </Box>
  )
}

export default PracticalExperience
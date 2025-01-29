import React, { useState } from 'react'
import { Box, Button } from '@chakra-ui/react'
import GeneralInformation from './components/GeneralInformation/GeneralInformation'
import { sendBatchUpdate } from '../api'

import PracticalExperience from './components/PracticalExperience/PracticalExperience'
import Education from './components/Eductation/Education'

const App = () => {
  const [experiences, setExperiences] = useState([]);
  const [generalInfo, setGeneralInfo] = useState({ email: '', firstName: '', middleName: '', lastName: '' });
  const [education, setEducation] = useState({ degree: '', institution: '' });

  const handleAddExperience = () => {
    setExperiences([...experiences, { companyName: '', positionTitle: '', description: '' }]);
  };

  const handleChangeExperience = (index, field, value) => {
    const newExperiences = experiences.map((experience, i) => (
      i === index ? { ...experience, [field]: value } : experience
    ));
    setExperiences(newExperiences);
  };

  const handleRemoveExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      generalInfo,
      education,
      experiences
    };
    console.log('Form submitted:', formData);
    await sendBatchUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box marginBottom="8">
        <GeneralInformation setGeneralInfo={setGeneralInfo} />
      </Box>
      <Box marginBottom="8">
        <Education setEducation={setEducation} />
      </Box>
      <Box marginBottom="8">
        {experiences.map((experience, index) => (
          <PracticalExperience
            key={index}
            index={index}
            experience={experience}
            handleChange={handleChangeExperience}
            handleRemove={handleRemoveExperience}
          />
        ))}
        <Button colorScheme="teal" onClick={handleAddExperience}>Add Experience</Button>
      </Box>
      <Button type="submit" colorScheme="teal">Submit</Button>
    </form>
  )
}

export default App
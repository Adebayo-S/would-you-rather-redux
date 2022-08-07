import React, { Component } from 'react'
import Question from './Question'
import 'bootstrap/dist/css/bootstrap.min.css'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

function QuestionsSet({ answered, unanswered }) {
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Unanswered Questions" value="1" />
            <Tab label="Answered Questions" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {unanswered.map((option) => (
            <Question key={option.id} option={option} status={'unanswered'} />
          ))}
        </TabPanel>
        <TabPanel value="2">
          {answered.map((option) => (
            <Question key={option.id} option={option} status={'answered'} />
          ))}
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default QuestionsSet

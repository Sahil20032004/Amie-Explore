import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Location() {
  const [location, setLocation] = React.useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label" sx={{ color:'white' }} >Location</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={location}
          onChange={handleChange}
          sx={{ color: 'white' }}
        >
          <MenuItem value={10}>Delhi</MenuItem>
          <MenuItem value={20}>Mumbai</MenuItem>
          <MenuItem value={30}>Bengaluru</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Location;
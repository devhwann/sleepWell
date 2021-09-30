import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import StaticTimePicker from '@material-ui/lab/StaticTimePicker';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Moment from 'moment';
import { ThemeContext } from '../../../pages/_app';
import { lightTheme, Theme } from '../../../styles/theme';

interface ITime {
  // times : {
  id: number;
  calc: any;
}

interface ThemeProps {
  theme: Theme;
}
const useStyles = makeStyles({
  root: {
    background: ${({ theme }) => theme.sunMoonBackground},
  },
});

const SleepTimePicker = () => {
  const classes = useStyles();

  const { theme } = useContext(ThemeContext);

  const [value, setValue] = useState(new Date());
  const [times, setTimes] = useState<ITime[]>([]);

  const handleChange = (value: Date | any) => {
    setValue(value); // value 사용자가 선택한 시간.
    console.log(value);
  };

  const onClickTimeCalc = () => {
    setTimes([
      times.concat(),
      {
        id: 1,
        calc: Moment(value).add(1, 'hours').format('hh mm'),
      },
      {
        id: 2,
        calc: Moment(value).add(1, 'hours').format('hh mm'),
      },
      {
        id: 3,
        calc: Moment(value).add(3, 'hours').format('hh mm'),
      },
      {
        id: 4,
        calc: Moment(value).add(4, 'hours').format('hh mm'),
      },
      {
        id: 5,
        calc: Moment(value).add(5, 'hours').format('hh mm'),
      },
    ]);
  };
  // const theme = useTheme();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticTimePicker
        ampm
        className={classes.root}
        orientation="landscape"
        openTo="hours"
        toolbarTitle="시간을 선택해주세요."
        value={value}
        theme={theme}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />
      <Button color="primary" variant="contained" onClick={onClickTimeCalc}>
        시작하기
      </Button>
      <div>
        <ul>
          {times.map((time, index) => (
            <li key={index}> {time.calc} </li>
          ))}
        </ul>
      </div>
    </LocalizationProvider>
  );
};

export default SleepTimePicker;

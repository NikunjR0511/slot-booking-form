import React, {useEffect, useState} from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useStyles from '../styles/form';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles} from '@material-ui/core/styles';
import axios from 'axios';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import dayjs from 'dayjs'

const today=new Date();
const minimumDate = (today.getHours()<18 ? new Date(new Date().getTime() + (24 * 60 * 60 * 1000)): new Date(new Date().getTime() + 2*(24 * 60 * 60 * 1000)));

export const Signup = () => {
  const validate = Yup.object({
    fullName: Yup.string()
      .max(15, 'Must be 40 characters or less')
      .required('Name is Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    location: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Location is required'),
    department: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Department is required'),
    // date: Yup.string()
    //   .max(20, 'Must be 20 characters or less')
    //   .required('Date is required'),
  
  })

  const ValidationTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
      },
    },
  })(TextField);

  const [departmentList, setDepartmentList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const[hour, setHour]=React.useState();
  const [selectedDate, setSelectedDate] = React.useState(today.getHours()<18 ? new Date(new Date().getTime() + (24 * 60 * 60 * 1000)): new Date(new Date().getTime() + 2*(24 * 60 * 60 * 1000)));


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();

  useEffect(() => {
    
    getdistslotdata();
    const h=(new Date().getHours());
    setHour(h);
    
  }, []);

  



  const getdistslotdata = () => {
    
    axios
      .post("http://api.gathan.in:8181//SlotBooking/getdistslotdata", {
      },{  headers: {'Access-Control-Allow-Origin': '*'}})
      .then((res) => {
        const items = res.data;
        if (items.Department) {
          setDepartmentList(items.Department);}
          if (items.Location) {
            setLocationList(items.Location);}

      }).catch((err) => {
        console.log(err);
      });
  };

  const bookSlot = (fullName,date,email,location,department) => {
   
    axios
      .post("http://api.gathan.in:8181//SlotBooking/bookslot", {
        location:location,
        department:department,
        name:fullName,
        emailId:email,
        date:date,
      },{  headers: {'Access-Control-Allow-Origin': '*'}})
      .then((res) => {
        const items = res.data;
        alert(items);
        console.log('per final API Call');
      }).catch((err) => {
        console.log(err);
      });
  };
 

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        location:'',
        department:'',
        // date:''
       
      }}
      validationSchema={validate}
      onSubmit={values => {
       
          console.log(minimumDate);
          console.log(selectedDate);
        if(dayjs(selectedDate).isBefore(dayjs(minimumDate)) ){
          alert("Date is less than minimum date");
          return;
        }
        const year=(selectedDate.getFullYear());
        const month=(selectedDate.getMonth()+1);
        const date=(selectedDate.getDate());
        
       
          let finalDate= (year+"-"+month+"-"+date);
          
          console.log(finalDate);
          console.log(typeof(finalDate));
        
        console.log(values);
        bookSlot(values.fullName,finalDate,values.email,values.location,values.department)
      }}
    >
      {formik => (
        <div>
          <h1 className={classes.textField}>Fix Your Slot</h1>
          <Form>
           
             
             <TextField
             className={classes.textField}
              fullWidth
              required
              id="fullName"
              name="fullName"
              label="Full  Name"
              variant="outlined"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={(formik.touched.fullName) && Boolean(formik.errors.fullName)}
              helperText={(formik.touched.fullName) && formik.errors.fullName}
            />
         
            <TextField
            className={classes.textField}
              fullWidth
              required
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={(formik.touched.email) && Boolean(formik.errors.email)}
              helperText={(formik.touched.email) && formik.errors.email}
            />
             {/* <TextField
             fullWidth
             required
            id="date"
            name="date"
            label="Date"
            type="date"
            minDate={new Date().toISOString().split("T")[0]}
            variant="outlined"
            className={classes.textField}
            value={formik.values.date}
            onChange={formik.handleChange}
            error={(formik.touched.date) && Boolean(formik.errors.date)}
            helperText={(formik.touched.date) && formik.errors.date}
            InputLabelProps={{
              shrink: true,
            }}
          /> */}

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          className={classes.textField}
          fullWidth
          required
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date"
          name="date"
          label="Date"
          
          
          minDate={minimumDate}
          // value={formik.values.date}
          // onChange={formik.handleChange}
          // error={(formik.touched.date) && Boolean(formik.errors.date)}
          // helperText={(formik.touched.date) && formik.errors.date}
          value={selectedDate}
          onChange={handleDateChange}

          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
         </MuiPickersUtilsProvider>
         

          

        <FormControl variant="outlined" className={classes.textField}fullWidth >
        <InputLabel id="demo-simple-select-outlined-label">Location</InputLabel>
        <Select
        required
          id="location"
          name="location" 
          variant="outlined"
          value={formik.values.location}
          onChange={formik.handleChange}
          label="Location"
          error={(formik.touched.location) && Boolean(formik.errors.location)}
        >
         
          { (locationList.map((item, index) => {
                return <MenuItem value={item} key={item}>{item}</MenuItem>;
              }))}
        </Select>
        <FormHelperText error>{(formik.touched.location) && formik.errors.location}</FormHelperText>

        </FormControl>
        
        <FormControl variant="outlined" className={classes.textField}fullWidth >
        <InputLabel id="demo-simple-select-outlined-label">Department</InputLabel>
        <Select
        required
          id="department"
          name="department" 
          variant="outlined"
          value={formik.values.department}
          onChange={formik.handleChange}
          label="Department"
          error={(formik.touched.department) && Boolean(formik.errors.department)}
        >
         
         { (departmentList.map((item, index) => {
                return <MenuItem value={item} key={item}>{item}</MenuItem>;
              }))}
        </Select>
        <FormHelperText error>{(formik.touched.department) && formik.errors.department}</FormHelperText>

        </FormControl>
      
      
        
    

            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

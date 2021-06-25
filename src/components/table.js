
import React, {useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from '../styles/table';
// import { motion } from "framer-motion";




export default function BasicTable(props) {
  const {availableSlot} = props;
  const classes = useStyles();
  const [rows, setRows] = useState([]);


  useEffect(() => {
    let tempRows = availableSlot.map((item, index) => {  
    console.log(item);
      return {
      
        bangaloreQuantira: item.Bangalore_Quantira,
        gurgaonIndxx:item.Gurgaon_Indxx,
        hyderabadIndxx: item.Hyderabad_Indxx,
        hyderabadQuantira: item.Hyderabad_Quantira,
        gurgaonQuantira: item.Gurgaon_Quantira,
        date:item.Date,
        bangaloreIndxx:item.Bangalore_Indxx,
        
      
      };

    });

    setRows(tempRows);
    // console.log(rows);
  }, [availableSlot]);

 

 
  return (
    // <motion.div
    // initial={{ scale: 0 }}
    // animate={{ scale: 1 }}
    // transition={{
    //   duration:0.7
    // }}>
    <TableContainer component={Paper} className={classes.tableconatiner}
    >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
           

            <TableCell className={classes.head}>Date </TableCell>
           
            <TableCell align="center" className={classes.head}>Gurgaon-Indxx</TableCell>
            <TableCell align="center" className={classes.head}>Gurgaon-Quantira</TableCell> 
            <TableCell align="center" className={classes.head}>Hyderabad-Indxx</TableCell>
            <TableCell align="center" className={classes.head}>Hyderabad-Quantira</TableCell>
            <TableCell align="center" className={classes.head}>Bangalore-Indxx</TableCell>
            <TableCell align="center" className={classes.head}>Bangalore-Quantira </TableCell>
           
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow key={row.date}>
     
               <TableCell component="th" scope="row" >
                {row.date}
              </TableCell>
              
             
            <TableCell align="center">{row.gurgaonIndxx}</TableCell>
            <TableCell align="center">{row.gurgaonQuantira}</TableCell>
             <TableCell align="center">{row.hyderabadIndxx}</TableCell>
            
            <TableCell align="center">{row.hyderabadQuantira}</TableCell>
            
            <TableCell align="center">{row.bangaloreIndxx}</TableCell>
            <TableCell align="center">{row.bangaloreQuantira}</TableCell>
            
           
            </TableRow>
          ))}
       

        </TableBody>
      </Table>
    
    </TableContainer>
  

    
   

    // </motion.div>
 
  );
}

import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: '70vw',
    },
    tableconatiner: {
      marginTop: '4vmin',
    },
    root: {
      width: '100%',
      marginTop: theme.spacing(1),
      overflowX: 'auto',
    },
  
    input: {
      textAlign: 'center',
    },
    buttons: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '50px',
      height: '70px',
      alignItems: 'center',
    },
    button: {
      background: 'linear-gradient(45deg, #556cd6 30%, #12C5EB 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 40,
      padding: '0 30px',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    popoverbutton: {
      background: 'linear-gradient(45deg, #556cd6 30%, #12C5EB 90%)',
      border: 0,
      borderRadius: 3,
      marginLeft: 30,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 30,
      width: 10,
      padding: '0 30px',
      '&:hover': {
        transform: 'scale(1.05)',
      },
     
    },
    modal:{
      paddingTop:100,
    },
    goalDes:{
      width:"300px",
      
    },
    head: {
      backgroundColor: '#556cd6',
      color: theme.palette.common.white,
    },
    goalDescriptions:{
      borderBottom:"0.7px solid gray"
    },
    pedTextbox: {
      display: 'flex',
      justifyContent: 'space-between',
      minWidth: '60vw',
      marginTop:"20px"
    },
    pedCommentbox:{
      width:"50vw"
    },
   
    foot:{
      backgroundColor: '#808080',
      color: 'white',
    },
    footText:{
      fontWeight:"bold",
    },
    buttonAlign:{
      float:'right',
      margin:'30px 0',
    },
    goalsModals:{
      width:"60vw",
    },
  }));

  export default useStyles;
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {  yellow } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
//import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Box from "@material-ui/core/Box";
import "../ContestDesc.css";

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(yellow[500]),
      backgroundColor: yellow[500],
      '&:hover': {
        backgroundColor: yellow[600],
      },
    },
  }))(Button);


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  enterContest: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    '&:hover': {
      backgroundColor: yellow[600],
    },
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <i className="fa fa-close"></i>
          {/* <CloseIcon /> */}
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onChangeHandler = event => {

    console.log(event.target.files[0])
  
  }

  return (
    <div className="fileUploadBoxContainer">
      <ColorButton variant="contained" color="primary" className="contest-button"  onClick={handleClickOpen}>
      Enter The Contest Now
      </ColorButton>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Submit Your Work
        </DialogTitle>
        <DialogContent dividers>

        <div class="container">
	      <div class="row">
      	  <div class="offset-md-3 col-md-6">
               <div class="form-group files">
                <label>Upload Your File </label>
                <input type="file" class="form-control" multiple onChange={onChangeHandler}/>
              </div>  
              <div class="form-group">
              {/* <ToastContainer /> */}
              {/* <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress> */}
        
              </div> 
              
              <button type="button" class="btn btn-danger btn-block" 
              // onClick={this.onClickHandler}
              >Upload</button>

	      </div>
      </div>
      </div>


      {/* GARBAGE STUFF*/}

        {/* <label htmlFor="upload-photo">
        <input
          style={{ display: "none" }}
          id="upload-photo"
          name="upload-photo"
          type="file"
        />
        <Button
        variant="contained"
        color="primary"
        startIcon={<CloudUploadIcon />}
        component="span"
      >
        Upload
      </Button>{" "}
      </label> */}



        <Box mt={5}>
          <Typography gutterBottom >
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam.
          </Typography>
          </Box>
        </DialogContent>
       
      </Dialog>
    </div>
  );
}
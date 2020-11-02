import React, {useEffect} from "react";
import {withStyles} from "@material-ui/core/styles";
import {yellow} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
//import CloseIcon from '@material-ui/icons/Close';
import Typography from "@material-ui/core/Typography";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AlertToast from "../../Alert/AlertToast";
import Box from "@material-ui/core/Box";
import "../ContestDesc.css";
import {connect} from "react-redux";
import {uploadPost} from "../../../actions/posts";
import ArtheistLoader from "../../ArtheistLoader/ArtheistLoader";
import {getContestById} from "../../../actions/contests";

function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  let contestFound;

  useEffect(() => {
    getContestById(props.contestId);
  }, [props.post]);

  if (!props.auth.user) {
    return <ArtheistLoader />;
  }

  const {contests} = props.auth.user;
  contestFound = contests.findIndex((contest) => contest === props.contestId);

  const handleClickOpen = () => {
    if (!props.auth.isAuthenticated) {
      AlertToast("You need to Signup/Login first!", "error");
    } else if (contestFound !== -1) {
      AlertToast("You have already participated in this contest", "error");
    } else {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    var postFile = document.querySelector("#post-file");
    var post = new FormData();
    post.append("post", postFile.files[0]);
    post.append("contestId", props.contestId);
    props.uploadPost(post);
  };

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(yellow[500]),
      backgroundColor: yellow[500],
      "&:hover": {
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
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    enterContest: {
      color: theme.palette.getContrastText(yellow[500]),
      backgroundColor: yellow[500],
      "&:hover": {
        backgroundColor: yellow[600],
      },
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const {children, classes, onClose, ...other} = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
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

  return (
    <div className="fileUploadBoxContainer">
      <ColorButton
        variant="contained"
        color="primary"
        className="contest-button"
        onClick={handleClickOpen}
      >
        Enter The Contest Now
      </ColorButton>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Submit Your Work
        </DialogTitle>
        <DialogContent dividers>
          <div className="container">
            <div className="row">
              <div className="offset-md-3 col-md-6">
                <div className="form-group">
                  <form encType="multipart/form-data" onSubmit={onSubmit}>
                    <div className="form-group files">
                      <label>Upload Your File </label>
                      <input
                        type="file"
                        className="form-control"
                        id="post-file"
                        name="post"
                      />
                      <button
                        type="submit"
                        className="btn btn-danger btn-block"
                      >
                        Upload
                      </button>
                    </div>
                  </form>
                </div>
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
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam.
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.posts.post,
});

export default connect(mapStateToProps, {uploadPost, getContestById})(
  CustomizedDialogs
);

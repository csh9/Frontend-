import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import jsPDF from 'jspdf';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
	
		
	function handleSingOut(){
    props.history.push("/");
}

//function for generating pdf
   function pdfGenerator () {
		var doc = new jsPDF ( 'p', 'pt');
		
		doc.text (20, 20, 'Optical character recognition or optical character reader (OCR),')
		doc.setFont('courier');
		
		doc.setFontType('normal');
		doc.text (20 , 30, 'Generated pdf')
		doc.save("sample.pdf");
	}
	
	
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <MenuList>
	  
	    <MenuItem component= {Link} to ="#"> 
	      File 1
	    </MenuItem >
	    <MenuItem>
	       
	    </MenuItem>
	    <MenuItem>
	      	  <div><input type= "file" /></div>
	    </MenuItem>
	    <MenuItem>
	      <div><input type= "file" /></div>
	    </MenuItem>
	  </MenuList>
      <Divider />
      <List>
        {['File 2', 'File 3', 'Import File'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <MailIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
			 </ListItem>

        ))}
      </List>
	   <Divider />
      <List>
        <Button
          type="submit"
		  fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSingOut}>
         Sing Out
        </Button>
		</List>
	  
	   
		
	  
    </div>
  );

  return (	
  
    <div className={classes.root}>
	
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Capture Document
          </Typography>
		  		  
        </Toolbar>
					
      </AppBar>
	  
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
       
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
       
	    
	   
	   <Typography paragraph>
		          <h1> FILES  TO BE DISPLAYED HERE </h1>
				 
           Optical character recognition or optical character reader (OCR) 
		   is the electronic or mechanical conversion of images of typed, 
		   handwritten or printed text into machine-encoded text, whether 
		   from a scanned document, a photo of a document, a scene-photo 
		   (for example the text on signs and billboards in a landscape photo) 
		   or from subtitle text superimposed on an image (for example from a television broadcast).[1]
           Widely used as a form of data entry from printed paper data records – whether passport documents,
          invoices, bank statements, computerized receipts, business cards, mail, printouts of static-data,
          or any suitable documentation – it is a common method of digitizing printed texts so that they can
         be electronically edited, searched, stored more compactly, displayed on-line, and used in machine
         processes such as cognitive computing, machine translation, (extracted) text-to-speech, key data and 
         text mining. OCR is a field of research in pattern recognition, artificial intelligence and computer vision.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          
       
	   </Typography>
		
		 <div><button onClick={pdfGenerator}> Extract PDF </button></div> 
		
      </main>
    </div>
	
	
	
  );
}



export default ResponsiveDrawer;
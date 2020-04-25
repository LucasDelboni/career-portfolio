import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // minHeight: '100vh',
    backgroundColor: 'rgb(239, 239, 239)'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

function contactList(Icon, text){
  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Icon />
      </Grid>
      <Grid item>
      <Typography variant="h5" component="h2" gutterBottom>
        {text}
      </Typography>
      </Grid>
    </Grid>
  )
}

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Contato
        </Typography>
        {contactList(LocationCityIcon, 'São Paulo - SP')}
        {contactList(EmailIcon, 'lucas.delboni2@gmail.com')}
        {contactList(LinkedInIcon, 'linkedin.com/in/lucasdelboni/')}
        {contactList(GitHubIcon, 'github.com/LucasDelboni')}
        {contactList(InstagramIcon, 'instagram.com/l0ucas.delboni/')}
      </Container>
    </div>
  );
}
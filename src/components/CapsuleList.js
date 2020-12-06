import React from 'react'
import PropTypes from 'prop-types'
import Capsule from './Capsule'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ImageIcon from '@material-ui/icons/Image';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { StyleSheet } from 'react-native';

let getLanguages = capsule => {
    return ('languages' in capsule) ?
        <List> {capsule.languages.map(language => ( <>
            <ListItem key={language._id}>
                <ListItemText
                    primary={language}/>
            </ListItem>
            <Divider variant="inset" component="li" /> </>
        ))} </List> :
        <ImageIcon/>
}

let id = 0

let getId = () => {
  id++;
  return id;
}

const CapsuleList = ({ capsules, onCapsuleClick, onCapsuleClose, style, toggleCapsule}) => (
    <> {toggleCapsule && <Dialog aria-labelledby="simple-dialog-title" onClose={() => onCapsuleClose()} open>
        <Toolbar>
            <DialogTitle id="customized-dialog-title" onClose={() => onCapsuleClose()}>
                {toggleCapsule.name}
            </DialogTitle>
            <IconButton edge="start" color="inherit" onClick={() => onCapsuleClose()} aria-label="close">
                <CloseIcon />
            </IconButton>
        </Toolbar>
        <DialogContent>
            {getLanguages(toggleCapsule)}
        </DialogContent> </Dialog>}
        <List style={{cursor: 'pointer'}}>
            {!!capsules && capsules.map(capsule => (
                <> <Capsule id={getId.toString()} firstName={capsule.firstName}
                    lastName={capsule.lastName}
                    languages={capsule.languages}
                    onClick={() => onCapsuleClick(capsule._id)} />
                <Divider variant="inset" component="li" /> </> ))}
        </List></>
)

CapsuleList.propTypes = {
  onCapsuleClick: PropTypes.func.isRequired,
}

export default CapsuleList

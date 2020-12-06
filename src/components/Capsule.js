import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

function formatLanguages(languages) {
  let res = "";
  languages.forEach(language => {
    res += language + " "
  });
  return res;
}

const Capsule = ({id, firstName, lastName, languages, onClick}) => (
    <ListItem key={id} onClick={onClick}>
        <ListItemText key={id.concat('_', 'text')} primary={firstName.concat(' ', lastName)} secondary={formatLanguages(languages)}/>
    </ListItem>
)

Capsule.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

export default Capsule

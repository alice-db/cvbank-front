import React from 'react'
import { connect } from 'react-redux'
import { searchCapsules } from '../actions'
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { StyleSheet } from 'react-native';

// App style with StyleSheet
const styles = StyleSheet.create({
    container: {
        width: 50
    },
});

const Search = ({ dispatch }) => {

  let queries = {
    firstName: "firstName=",
    lastName: "lastName=",
    languages: "languages="
  }

  // search capsules on input
  function sendSearch (e, type) {
    queries[type] = type + "="
    e.preventDefault();
    let names = e.target.value.split(',')
    names.map(name => name.trim() + "&");
    names[names.length - 1] = names[names.length - 1].trim("&")
    let query = ""
    names.forEach(name => {
      query += name
    });
    queries[type] = queries[type] + query
    dispatch(searchCapsules(getAllQueries()));
  }

  function formatQuery (query) {
    return query[query.length - 1] == "=" ? "" : query;
  }

  function getAllQueries () {
    return formatQuery(queries.firstName) + "&" + formatQuery(queries.lastName) + "&" + formatQuery(queries.languages)
  }


  return (
    <form noValidate autoComplete="off" >
    <div style={{ whiteSpace: "nowrap", display: "inline-block", width: "100%"}}>
    <div style={{ whiteSpace: "nowrap", display: "inline-block", width: "50%"}}>
        <TextField id="searchbar_firstname" type="search" fullWidth
            onChange={e => sendSearch(e, "firstName")}
            label="First Name"
            InputProps={{
                placeholder: "Jane,...",
                startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
            }} />
      </div>
      <div style={{ whiteSpace: "nowrap", display: "inline-block", width: "50%"}}>
        <TextField id="searchbar_lastname" type="search" fullWidth
            onChange={e => sendSearch(e, "lastName")}
            label="Last Name"
            InputProps={{
                placeholder: "Doe,...",
                startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
            }} />
        </div>
        </div>
        <TextField id="searchbar_languages" type="search" fullWidth
            onChange={e => sendSearch(e, "languages")}
            label="Languages"
            helperText="Separate each values with comma"
            InputProps={{
                placeholder: "Python,...",
                startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
            }} />
    </form>
  )
}

export default connect()(Search)

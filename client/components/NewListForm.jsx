import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as sc from '../styles/newListFormStyles';

const NewListForm = (props) => {
  const [inputValue, setInputValue] = useState('');

  const { showForm, toggleShowForm, addToList } = props;
  let listInputRef;

  useEffect(() => {
    listInputRef.focus();
    setInputValue('');
  }, [showForm]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const createList = () => {
    toggleShowForm();
    addToList(inputValue);
    setInputValue('');
  };


  const createButtonColor = 'white';
  const createBackgroundColor = 'rgb(0, 132, 137)';
  const cancelButtonColor = 'rgb(0, 132, 137)';
  const cancelBackgroundColor = 'white';

  return (
    <sc.StyledListForm showForm={showForm}>
      Name
      <sc.ListInput
        spellcheck="false"
        ref={(ref) => { listInputRef = ref; }}
        onChange={handleChange}
        value={inputValue}
        type="text"
        placeholder="Name your list"
      />
      <sc.ListFormButtonWrapper>
        <sc.StyledListFormButton
          color={cancelButtonColor}
          backgroundColor={cancelBackgroundColor}
          onClick={toggleShowForm}
        >
          cancel
        </sc.StyledListFormButton>
        <sc.StyledListFormButton
          color={createButtonColor}
          backgroundColor={inputValue === '' ? 'rgba(0, 132, 137, 0.3)' : createBackgroundColor}
          onClick={createList}
          disabled={inputValue === ''}
          createButton
        >
          create
        </sc.StyledListFormButton>
      </sc.ListFormButtonWrapper>
    </sc.StyledListForm>
  );
};

NewListForm.propTypes = {
  showForm: PropTypes.bool.isRequired,
  toggleShowForm: PropTypes.func.isRequired,
  addToList: PropTypes.func.isRequired,
};

export default NewListForm;

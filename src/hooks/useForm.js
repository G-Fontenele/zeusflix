import { useState } from 'react';

// import { Container } from './styles';

function useForm(initValues) {
    const [values, setValues] = useState(initValues);
    
    function setValue(key, value) {
        setValues({
        ...values,
        [key]: value, // 'name': valor
        });
    }
    
    const maxCategoryChar = 40;
    function handler(eventInfo) {
        setValue(
        eventInfo.target.getAttribute('name'),
        eventInfo.target.value,
        );
        if (eventInfo.target.getAttribute('name') === 'name') {
        if (eventInfo.target.value.length > maxCategoryChar) {
            eventInfo.target.value = eventInfo.target.value.substring(0, maxCategoryChar - 1);
            setValue(
            eventInfo.target.value,
            eventInfo.target.getAttribute('name'),
            );
        }
        }
    }
    
    function clearForm() {
        setValues(initValues);
    }
    
    return {
        values,
        handler,
        clearForm,
    };
    }


export default useForm;

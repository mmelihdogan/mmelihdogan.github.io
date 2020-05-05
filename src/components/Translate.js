import React from 'react';
import { useTranslation } from 'react-i18next';

function Translate(props) {
    const { t } = useTranslation();
    console.log(props) 

    return (
        <>
        {t(props)}
        </>
    )
}

export default Translate;
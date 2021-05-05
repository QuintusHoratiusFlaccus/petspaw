import React from 'react'

import s from './ModalTitle.module.css'

const ModalTitle = () => {
    return (
        <>
            <span className={s.title_first}>
                Upload a .jpg or .png Dog Image
            </span>
            <span className={s.title_second}>
                Any uploads must comply with the &nbsp;
                <a href="https://thedogapi.com/privacy" className={s.second_link}>
                  upload guidelines
                </a>
                &nbsp; or face deletion.
            </span>
        </>
    )
}

export default ModalTitle

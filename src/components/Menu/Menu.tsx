import Link from 'next/link'
import styles from './Menu.module.scss'
import { BiExit } from 'react-icons/bi'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { TbNotes } from "react-icons/tb"

import AnimatedElementFromLeft from '../../styles/animations/AnimatedElementFromLeft'
import { useEffect, useRef, useState } from 'react'

function Menu() {

    const menuNotes = useRef(null)
    const menuConfig = useRef(null)
    const menuExit = useRef(null)

    function removeClickableAttributes(ref: any) {
        ref.current.style.userSelect = 'none'
        ref.current.style.cursor = 'default'
        ref.current.style.pointerEvents = 'none'
    }

    function addColorAtActiveElement(ref: any, color: string) {
        ref.current.style.color = color
    }

    useEffect(() => {

        var lis = document.querySelectorAll(`.${styles.c_menu_list__item__link}`)
        for (let i = 0; i < lis.length; i++) {
            if (window.location.pathname == `/logged/notes` || window.location.pathname == `/logged`) {
                removeClickableAttributes(menuNotes)
                addColorAtActiveElement(menuNotes, '#ff9f19')
            }
            if (window.location.pathname == `/logged/config`) {
                removeClickableAttributes(menuConfig)
                addColorAtActiveElement(menuConfig, '#ff9f19')
            }
        }
    })


    return (
        <div className={styles.c_menu}>
            <ul className={styles.c_menu_list}>
                <li className={styles.c_menu_list__item}>
                    <Link ref={menuNotes} href={'/logged/notes'} className={styles.c_menu_list__item__link}>
                        <TbNotes />
                    </Link>
                </li>
                <li className={styles.c_menu_list__item}>
                    <Link ref={menuConfig} href={'/logged/config'} className={styles.c_menu_list__item__link}>
                        <MdOutlineManageAccounts />
                    </Link>
                </li>
                <li className={styles.c_menu_list__item}>
                    <Link ref={menuExit} href={'/'} className={styles.c_menu_list__item__link}>
                        <BiExit />
                    </Link>
                </li>
            </ul>
        </div >
    )
}

export default Menu
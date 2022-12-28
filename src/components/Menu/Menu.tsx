// styles
import styles from './Menu.module.scss'
// icons
import { BiExit } from 'react-icons/bi'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { TbNotes } from "react-icons/tb"
// react hooks
import { useEffect, useRef } from 'react'
// utils
import selectMenuOption from '../../utils/activeElements'
// next components
import Link from 'next/link'

function Menu() {

    const c_menu = useRef<any>(null)

    const menuNotes = useRef<HTMLAnchorElement>(null)
    const menuConfig = useRef<HTMLAnchorElement>(null)
    const menuExit = useRef<HTMLAnchorElement>(null)

    function hiddenMenuSlowly(e: any) {
        e.preventDefault()
        c_menu.current.style.transition = '0.3s'
        c_menu.current.style.left = '-90px'
        setTimeout(() => {
            window.location.replace('/')
        }, 1)

    }

    useEffect(() => {


        var lis = document.querySelectorAll(`.${styles.c_menu_list__item__link}`)

        for (let i = 0; i < lis.length; i++) {
            if (window.location.pathname == `/logged/notes` || window.location.pathname == `/logged`) {
                selectMenuOption(menuNotes.current, '#ff9f19')
            }
            if (window.location.pathname == `/logged/config`) {
                selectMenuOption(menuConfig.current, '#ff9f19')
            }
        }
    })

    return (
        <div className={styles.c_menu} ref={c_menu}>
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
                    <Link ref={menuExit} onClick={(e) => { hiddenMenuSlowly(e) }} href={'/'} className={styles.c_menu_list__item__link}>
                        <BiExit />
                    </Link>
                </li>
            </ul>
        </div >
    )
}

export default Menu
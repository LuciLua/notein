// styles
import styles from './Menu.module.scss'
// icons
import { BiExit } from 'react-icons/bi'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { TbNotes } from "react-icons/tb"
// react hooks
import { useContext, useEffect, useRef } from 'react'
// utils
import selectMenuOption from '../../utils/activeElements'
// next components
import Link from 'next/link'
import { UserContext } from '../../contexts/UserContext'
// context


function Menu() {

    const [dataForContext] = useContext(UserContext)

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
        var lis = document.querySelectorAll(`.${styles.c_menu_list_item_link}`)

        for (let i = 0; i < lis.length; i++) {
            if (window.location.pathname == `/logged/${dataForContext}/notes` || window.location.pathname == `/logged`) {
                selectMenuOption(menuNotes.current, '#ff9f19')
            }
            if (window.location.pathname == `/logged/${dataForContext}/config`) {
                selectMenuOption(menuConfig.current, '#ff9f19')
            }
        }
    })

    return (
        <div className={styles.c_menu} ref={c_menu}>
            <ul className={styles.c_menu_logo}>
                <li className={styles.c_menu_list_item}>
                    <Link ref={menuNotes} href={`/logged/${dataForContext}/notes`} className={styles.c_menu_list_item_link}>
                        <span className={styles.c_menu_logo_icon}>
                            <TbNotes />
                        </span>
                        <span className={styles.c_menu_logo_span}>
                            NoteIn
                        </span>
                    </Link>
                </li>
            </ul>
            <ul className={styles.c_menu_list}>
                <li className={styles.c_menu_list_item}>
                    <Link ref={menuNotes} href={`/logged/${dataForContext}/notes`} className={styles.c_menu_list_item_link}>
                        <span className={styles.c_menu_list_item_link_span}>
                            Notes
                        </span>
                        <span className={styles.c_menu_list_item_link_icon}>
                            <TbNotes />
                        </span>
                    </Link>
                </li>
                <li className={styles.c_menu_list_item}>
                    <Link ref={menuConfig} href={`/logged/${dataForContext}/config`} className={styles.c_menu_list_item_link}>
                        <span className={styles.c_menu_list_item_link_span}>
                            My Account
                        </span>
                        <span className={styles.c_menu_list_item_link_icon}>
                            <MdOutlineManageAccounts />
                        </span>
                    </Link>
                </li>
                <li className={styles.c_menu_list_item}>
                    <Link ref={menuExit} onClick={(e) => { hiddenMenuSlowly(e) }} href={'/'} className={styles.c_menu_list_item_link}>
                        <span className={styles.c_menu_list_item_link_span}>
                            Exit
                        </span>
                        <span className={styles.c_menu_list_item_link_icon}>
                            <BiExit />
                        </span>
                    </Link>
                </li>
            </ul>
        </div >
    )
}

export default Menu
// styles
import styles from './Menu.module.scss'
// icons
import { BiExit } from 'react-icons/bi'
import { MdOutlineManageAccounts } from 'react-icons/md'
// react hooks
import { useContext, useEffect, useRef } from 'react'
// utils
import selectMenuOption from '../../utils/activeElements'
// next components
import Link from 'next/link'
import { UserContext } from '../../contexts/UserContext'
import Li from './Li/Li'
import { TbNotes } from 'react-icons/tb'
// context


function Menu() {

    const [dataForContext, setDataForContext] = useContext<any>(UserContext)

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

        if (window.location.pathname == `/logged/${dataForContext.userId}/notes` || window.location.pathname == `/logged/${dataForContext.userId}`) {
            console.log('select: notes')
            selectMenuOption(menuNotes.current, 'var(--activeElement)')
        }
        if (window.location.pathname == `/logged/${dataForContext.userId}/config`) {
            console.log('select: config')
            selectMenuOption(menuConfig.current, 'var(--activeElement)')
        }

    })

    return (
        <div className={styles.c_menu} ref={c_menu}>
            <ul className={styles.c_menu_logo}>
                <Li
                    containerStylesLi={styles.c_menu_logo_item}
                    Liref={menuNotes}
                    href={`/logged/${dataForContext.userId}/notes`}
                    className={styles.c_menu_logo_item_link}
                    spanStylesIcon={styles.c_menu_logo_icon}
                    icon={<TbNotes />}
                    spanStylesText={styles.c_menu_logo_span}
                    text={'NoteIn'}
                    onClick={''}
                />
            </ul>
            <ul className={styles.c_menu_list}>
                <Li
                    containerStylesLi={styles.c_menu_list_item}
                    Liref={menuNotes}
                    href={`/logged/${dataForContext.userId}/notes`}
                    className={styles.c_menu_list_item_link}
                    spanStylesIcon={styles.c_menu_list_icon}
                    icon={<TbNotes />}
                    spanStylesText={styles.c_menu_list_span}
                    text={'Notes'}
                    onClick={''}

                />
                <Li
                    containerStylesLi={styles.c_menu_list_item}
                    Liref={menuConfig}
                    href={`/logged/${dataForContext.userId}/config`}
                    className={styles.c_menu_list_item_link}
                    spanStylesIcon={styles.c_menu_list_icon}
                    icon={<MdOutlineManageAccounts />}
                    spanStylesText={styles.c_menu_list_span}
                    text={'My Account'}
                    onClick={''}
                />
                <Li
                    containerStylesLi={styles.c_menu_list_item}
                    Liref={menuExit}
                    href={`/`}
                    className={styles.c_menu_list_item_link}
                    spanStylesIcon={styles.c_menu_list_icon}
                    icon={<BiExit />}
                    spanStylesText={styles.c_menu_list_span}
                    text={'Exit'}
                    onClick={hiddenMenuSlowly}
                />
            </ul>
        </div >
    )
}

export default Menu
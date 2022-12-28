// styles
import styles from './MyNotes.module.scss'
// icons
import { MdAdd } from 'react-icons/md'

function MyNotes() {
    return (
        <div className={styles.c_notes}>
            <div className={styles.c_text}>
                <div className={styles.c_text_title_btn}>
                    <h1>My notes</h1>
                    <button>
                        <div className={styles.icon}>
                            <MdAdd />
                        </div>
                    </button>
                </div>
                <p>All your notes here</p>
            </div>
            <div className={styles.MyNotes}>
                <div className={styles.note}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque minima nemo voluptatibus rem. Aut, quis placeat. Ratione quis deleniti reprehenderit officiis suscipit, in ex voluptate perferendis. Corporis repudiandae architecto dicta.</p>
                </div>
                <div className={styles.note}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nam rem tenetur expedita dolore quo, maiores ipsam veritatis ipsa incidunt placeat earum. Ex sunt adipisci nemo veniam officia, porro facilis.</p>
                </div>
                <div className={styles.note}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aperiam cum deserunt accusamus aliquam doloremque magnam error dolor dolore ullam quidem, ratione vero? Dicta fugiat libero, deserunt facere iusto impedit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aperiam cum deserunt accusamus aliquam doloremque magnam error dolor dolore ullam quidem, ratione vero? Dicta fugiat libero, deserunt facere iusto impedit!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MyNotes
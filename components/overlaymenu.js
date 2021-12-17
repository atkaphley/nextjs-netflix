import BtnUI from './btnui'
import Nav from './nav'
import styles from './overlay.module.scss'

import Link from 'next/link'

import { getNavLinks } from '../lib/api'

const OverlayMenu = ({ closeHandler }) => {
    const navLinks = getNavLinks();

    return <div className={styles.overlay}>
        <BtnUI icon="close" clickHandler={() => {
            closeHandler(false)
        }} />
        <Nav type="mobile" />
    </div>
}
export default OverlayMenu
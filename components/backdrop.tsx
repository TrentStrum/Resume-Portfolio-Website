import styles from './backdrop.module.css'

type Props = {
	show: boolean;
	outsideClick: () => void;
};
export default function Backdrop ({ show, outsideClick }: Props) {
    console.log ('backdrop: '+show)
    function handleTest () {
        console.log('handle test')
    }
    return (
        <>
            {show ? <div
			className={styles.backdrop}
			onClick={handleTest}
		></div> : null}
        </>
    )
}

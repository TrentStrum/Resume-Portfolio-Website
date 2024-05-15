'use client';

import Image from 'next/image';
import styles from './modalProject.module.css';
import Backdrop from './backdrop';

type modalProps = {
	selectedProject: any;
	dialogRef: any;
	onClose: () => void;

	// onClickCode: () => void;
	// onClickDemo: () => void;
};

export default function ProjectModal({
	dialogRef,
	selectedProject,
	onClose,
}: modalProps) {
	


	return (
		<>
			<dialog
				ref={dialogRef}
				className={styles.dialog}
				id='#dialog-target'
				onClick={onClose}
			>
				<header className={styles.header}>
					<h1>
						<strong>{selectedProject.title}</strong>
					</h1>
				</header>
				<div className={styles.container}>
					<div className={styles.subcontainer1}>
						<div className={styles.item1}>
							<p>{selectedProject.fullDescription}</p>
						</div>
						<div className={styles.item2}>
							<div className={styles.form}>
								<button className={styles.buttons}>
									<a
										href={selectedProject.demoUrl}
										target='_blank'
										rel='noopener noreferrer'
									>
										See Demo
									</a>
								</button>
								<button className={styles.buttons}>
									<a
										href={selectedProject.gitRepoUrl}
										target='_blank'
										rel='noopener noreferrer'
									>
										See Code
									</a>
								</button>
							</div>
						</div>
					</div>

					<div className={styles.subcontainer2}>
						<Image
							src={selectedProject.imageUrl}
							alt='Project I worked on'
							quality={95}
						/>
					</div>
				</div>
			</dialog>
		</>
	);
}

import React from 'react';
import Layout from '@theme/Layout';
import {useLocation} from '@docusaurus/router';
import styles from './contact.module.css';

export default function Contact() {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const workshop = params.get('workshop');

	return (
		<Layout
			title="Contact"
			description="Contact Make Small Games about workshops and programs."
		>
            <main className={styles.main}>
                <h1>Contact</h1>

                {workshop === 'platformer' && (
                    <p>
                        You are interested in the <strong>Platformer Workshop</strong>.
                    </p>
                )}

                <form className={styles.form}>
                    <label>
                        Name
                        <input type="text" name="name" />
                    </label>

                    <label>
                        Email
                        <input type="email" name="email" />
                    </label>

                    <label>
                        Organization
                        <input type="text" name="organization" />
                    </label>

                    <label>
                        Workshop Length
                        <select name="duration">
                            <option value="">Choose a length</option>
                            <option value="1-hour">1 Hour</option>
                            <option value="2-hours">2 Hours</option>
                            <option value="3-hours">3 Hours</option>
                        </select>
                    </label>

                    <label>
                        Estimated Participants
                        <input type="number" name="participants" min="1" />
                    </label>

                    <label>
                        Message
                        <textarea name="message" rows="5" />
                    </label>

                    <button type="submit">
                        Send Request
                    </button>
                </form>
            </main>
		</Layout>
	);
}
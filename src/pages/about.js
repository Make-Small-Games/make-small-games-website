import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
	return (
		<Layout
			title="About"
			description="About Make Small Games."
		>
            <main>
                <h1>About Make Small Games</h1>

                <p>
                    Make Small Games helps beginners learn programming by building
                    small games and projects they can actually finish.
                </p>

                <p>
                    Workshops focus on learning by doing. Students build alongside
                    the instructor, experiment with their projects, and leave with
                    something they created themselves.
                </p>

                <h2>Who It's For</h2>

                <p>
                    Make Small Games workshops are designed for beginners with little
                    or no programming experience.
                </p>

                <p>
                    Programs can be adapted for schools, libraries, maker spaces,
                    community organizations, and other learning environments.
                </p>
            </main>
		</Layout>
	);
}
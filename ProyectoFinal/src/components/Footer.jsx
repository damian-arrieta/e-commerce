import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
            <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/damian-arrieta/" role="button" target="_blank">
                <LinkedInIcon />
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/damian-arrieta" role="button" target="_blank">
                <GitHubIcon />
            </a>
            </section>

        </div>

        <div className="text-center p-3">
            © 2023 Damián Arrieta Proyecto Final React Coderhouse.
        </div>
    </footer>
  )
}
